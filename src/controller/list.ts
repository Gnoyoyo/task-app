// import Database from "./adapter/mock-database";
import Database from "../adapter/database";

class ListController {
  static async getList(): Promise<any> {
    return await Database.getList();
  }

  static async createList(title:string): Promise<any> {
    return await Database.createList(title);
  }
}   
  
export default ListController;