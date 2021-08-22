import { List, PrismaClient, Task } from "@prisma/client";
import * as Interface from  "./database-interface";
const prisma = new PrismaClient();

class Databases {
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
    const count = await prisma.task.count({
      where: {
        listId: request.listId
      }
    }
    );
    const task = await prisma.task.create({
      data: {
        title: request.title,
        listId: request.listId,
        order : String(count * 100)
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

  static async getTaskOrderbyOrder(
    request : {
      listId: number,
      order: number
    }): Promise<Task[]> {
    const TAKE = 2;
    const tasks = await prisma.task.findMany({
      skip: request.order - 2,
      take: TAKE,
      where : {
        listId: request.listId
      },
      orderBy: {
        order: 'asc',
      }
    });
    console.log(tasks);
    return tasks;
  }

  static async getTaskCount(
    request : {
      listId: number
    }): Promise<number> {
    const count = await prisma.task.count({
      where : {
        listId: request.listId
      }});
    return count;
  }

  static async getTask(
    request : {
      id: number
    }): Promise<Task | null> {
    const task = await prisma.task.findUnique({
      where : {
        id: request.id
      }});
    return task;
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

  //get string between two strings
  

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


export default Databases;