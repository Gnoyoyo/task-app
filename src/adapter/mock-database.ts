import * as Interface from  "./database-interface";
import { List, Task } from "@prisma/client";
class Databases {
  static async createList(request : Interface.createListRequest): Promise<Interface.createListResponse> {
    console.log("Create LIST");
    console.log(request.title);
    return {
      id: 1,
      title :request.title
    };
  }

  static async getList(): Promise<(List & {
    tasks: Task[];
  })[]> {
    console.log("GET LIST");
    return [{
      id:1,
      title: "School TODO",
      createdAt: new Date("2021-08-21T17:31:30.967Z"),
      updatedAt: new Date("2021-08-21T17:31:30.967Z"),
      tasks :[
        {
          id:1,
          listId: 1,
          title: 'Home Work',
          status: 'TODO',
          order: "1",
          createdAt: new Date("2021-08-21T17:31:30.967Z"),
          updatedAt: new Date("2021-08-21T17:31:30.967Z"),
        },
        {
          id:2,
          listId: 1,
          title: 'Class Work',
          status: 'DONE',
          order: "2",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    }]
  }

  static async createTask(request: Interface.createTaskRequest): Promise<Interface.createTaskResponse> {
    console.log("Create" ,request);
    return {
      id :1,
      title: "string",
      status: "TODO"
    };
  }

  static async updateTask(request:Interface.updateTaskRequest): Promise<Interface.updateTaskResponse> {
    console.log("Update" ,request)
    return {
      id :1,
      title :"string",
      status :"TODO"
    };
  }

}   


export default Databases;