
import Database from "../adapter/database";

export default class TaskUtils {
  static async calculateOrder(request:
  {
    listId:number,
    beforeId?:number,
    afterId?:number
  }): Promise<number> {
    if(!request.beforeId && !request.afterId) {
      throw new Error("ERROR : beforeId or afterId must exist")
    }
    if(!request.afterId && request.beforeId) {
      const order = await Database.getTask({
        id:request.beforeId
      });
      return Number(order?.order) / 2;
    }else if(!request.beforeId && request.afterId) {
      const order =await Database.getTask({
        id:request.afterId
      });
      return Number(order?.order) + 100;
    }
        
    const taskBefore = await Database.getTask({
      id: request.beforeId!
    });
    const taskAfter = await Database.getTask({
      id: request.beforeId!
    });
    if(!taskBefore || !taskAfter) {
      throw new Error("ERROR :beforeId or afterId must exist")
    }
    const newOrder = (Number(taskBefore.order) + Number(taskAfter.order))/2;
    return newOrder;
  }
        
  static async validateStatus(status:string|undefined): Promise<boolean> {
    const statusList = ["TODO", "DOING", "DONE"];
    return status && statusList.includes(status) ? true : false;
  }
}
