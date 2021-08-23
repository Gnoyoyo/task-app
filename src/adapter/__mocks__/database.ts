/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Interface from  "../database-interface";
import { List, Task } from "@prisma/client";
import { Prisma } from '@prisma/client'
class Databases {
  static async createList(request : Interface.createListRequest): Promise<Interface.createListResponse> {
    return {
      id: 1,
      title :request.title
    };
  }

  static async getList(): Promise<(List & {
    tasks: Task[];
  })[]> {
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
          order: new Prisma.Decimal(1),
          createdAt: new Date("2021-08-21T17:31:30.967Z"),
          updatedAt: new Date("2021-08-21T17:31:30.967Z"),
        },
        {
          id:2,
          listId: 1,
          title: 'Class Work',
          status: 'DONE',
          order: new Prisma.Decimal(2),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    }]
  }

  static async createTask(request: Interface.createTaskRequest): Promise<Interface.createTaskResponse> {
    return {
      id :1,
      title: "string",
      status: "TODO"
    };
  }

  static async updateTask(request:Interface.updateTaskRequest): Promise<Interface.updateTaskResponse> {
    return {
      id :1,
      title :"string",
      status :"TODO"
    };
  }
  static async getTask(request:Interface.getTaskRequest): Promise<Interface.getTaskResponse> {
    return {
      id :1,
      title :"string",
      status :"TODO",
      order : 1,
      listId: 1,
    };
  }
  static async getLastTask(request:Interface.getTaskRequest): Promise<Interface.getTaskResponse> {
    return {
      id :1,
      title :"string",
      status :"TODO",
      order : 1,
      listId: 1,
    };
  }
  static async getFirstTask(request:Interface.getTaskRequest): Promise<Interface.getTaskResponse> {
    return {
      id :1,
      title :"string",
      status :"TODO",
      order : 1,
      listId: 1,
    };
  }

}   


export default Databases;