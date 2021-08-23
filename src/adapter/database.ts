import { List, PrismaClient, Task } from "@prisma/client";
import * as Interface from  "./database-interface";
const prisma = new PrismaClient();

export default class Databases{
  static async createList(request : Interface.createListRequest): Promise<Interface.createListResponse> {
    const list = await prisma.list.create({
      data: {
        title: request.title
      }
    });
    return list;
  }

  static async getList(): Promise<(List & {
    tasks: Task[];
  })[]> {
    const list = await prisma.list.findMany({
      orderBy: [
        {
          createdAt :"asc"
        }
      ],
      include : {
        tasks: {
          orderBy: [{
            order: "asc"
          },
          {
            updatedAt: "asc"
          }
          ]
        }
      }
    });
    return list;
  }

  static async createTask(request: Interface.createTaskRequest): Promise<Interface.createTaskResponse> {
    const task = await prisma.task.create({
      data: {
        title: request.title,
        listId: request.listId,
        order : request.order
      }
    });
    return task;
  }

  static async updateTask(
    request : Interface.updateTaskRequest): Promise<Interface.updateTaskResponse> {
    return await prisma.task.update({
      where : {
        id: request.id
      },
      data: {
        title: request.title,
        order: request.order,
        status: request.status,
      }
    });
  }
  
  static async getTask(
    request : Interface.getTaskRequest): Promise<Interface.getTaskResponse | undefined> {
    const task = await prisma.task.findUnique({
      where : {
        id: request.id
      }});
    return task ? 
      {
        id: task.id,
        title: task.title,
        order: Number(task.order),
        status: task.status,
        listId: task.listId
      }:undefined;
  }

  static async getLastTask(
    request : {
      listId: number
    }): Promise<Task | null> {
    const task = await prisma.task.findFirst({
      where : {
        listId: request.listId
      },
      orderBy: {
        order: 'desc',
      }});
    return task;
  }  

  static async getFirstTask(
    request : {
      listId: number
    }): Promise<Task | null> {
    const task = await prisma.task.findFirst({
      where : {
        listId: request.listId
      },
      orderBy: {
        order: 'asc',
      }});
    return task;
  }
}   
