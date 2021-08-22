import Database from "../adapter/database";

class TaskController {
  static async createTask(title:string,listId:number): Promise<any> {
    const task = await Database.createTask(
      {
        title:title,
        listId:listId
      }
    );
    return task;
  }

  static async updateTask(
    request:{
      id:number,
      title?:string,
      status?:string,
      order?:number,
    }): Promise<any> {

    await validateStatus(request.status);

    const task = await Database.getTask({
      id:request.id
    });
    if(!task) {
      throw new Error("Task doesn't exist")
    }


    const order = request.order ? await calculateOrder({
      listId:task.listId,
      order: request.order
    }) : undefined
    console.log(order);

    const updatedTask = await Database.updateTask({
      id:request.id,
      title:request.title,
      status: request.status,
      order : order? String(order) : undefined,
    });
    return updatedTask;
  }
}   

export default TaskController;

async function calculateOrder(request:
{
  listId:number,
  order:number
}): Promise<number> {
  if(request.order === 0) {
    const order = await Database.getFirstTask({
      listId:request.listId
    });
    if(order?.order){
      return Number(order.order) + 100;
    }
  }
  const taskCount = await Database.getTaskCount({
    listId:request.listId,
  });

  if(request.order === taskCount){
    const order =await Database.getLastTask({
      listId:request.listId
    });
    if(order?.order){
      return Number(order.order) - 100;
    }
  }
  const tasks = await Database.getTaskOrderbyOrder({
    listId:request.listId,
    order:request.order
  });
  const newOrder = (Number(tasks[0].order) + Number(tasks[1].order))/2;
  return newOrder;
}

async function validateStatus(status:string|undefined): Promise<boolean> {
  const statusList = ["TODO", "DOING", "DONE"];
  return status && status in statusList? true : false;
}