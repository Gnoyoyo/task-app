import Database from "../adapter/database";

class ListController {
  static async getList(): Promise<any
  // {
  //   id:number,
  //   title:string,
  //   tasks? : {
  //     id:number,
  //     title:string,
  //     status:string
  //   }[]
  // }[]
  > {
    const list = await Database.getList();
    return list.map(list => {
      return {
        id: list.id,
        title: list.title,
        tasks: list.tasks.map(task => {
          return {
            id: task.id,
            title: task.title,
            status: task.status,
          }
        })
      }
    })
    
  }

  static async createList(request:{
    title:string
  }): Promise<any
    // {
    //     id:number,
    //     title:string,
    //   }
    > {
    return await Database.createList({
      title :request.title   
    });
  }
}   
  
export default ListController;