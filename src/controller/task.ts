import Database from "../adapter/database";
import TaskUtils from "./task-utils";
class TaskController {
  static async createTask(title:string,listId:number): Promise<any> {
    const firstTask = await Database.getFirstTask(
      {
        listId:listId
      }
    );
    const order = firstTask ? Number(firstTask.order)/2 : 10000;
    const task = await Database.createTask(
      {
        title:title,
        listId:listId,
        order:order,
      }
    );
    return task;
  }

  static async updateTask(
    request:{
      id:number,
      title?:string,
      status?:string,
    }): Promise<any> {

    if(!await TaskUtils.validateStatus(request.status)){
      throw new Error("Invalid status");
    }

    const task = await Database.getTask({
      id:request.id
    });
    if(!task) {
      throw new Error("Task doesn't exist")
    }

    const updatedTask = await Database.updateTask({
      id: request.id,
      title:request.title,
      status: request.status
    });
    return updatedTask;
  }
  static async moveTask(request:{
    id:number,
    beforeId?:number,
    afterId?:number,
  }): Promise<any> {

    const task = await Database.getTask({
      id:request.id
    });
    if(!task) {
      throw new Error("Task doesn't exist")
    }

    const order = await TaskUtils.calculateOrder({
      listId:task.listId,
      beforeId:request.beforeId,
      afterId:request.afterId
    });
    const updatedTask = await Database.updateTask({
      id: request.id,
      order:order
    });
    return updatedTask;
  }
}   

export default TaskController;