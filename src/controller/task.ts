import Database from "../adapter/mock-database";
// import Database from "../adapter/database";

class TaskController {
  static async createTask(title:string,listId:number): Promise<number> {
    return await Database.createTask(title,listId);
  }

  static async updateTask(id:number,title:string): Promise<void> {
    return await Database.updateTask(id,title);
  }

  static async moveTask(id:number,title:string): Promise<void> {
    return await Database.moveTask(id,title);
  }

}   

export default TaskController;