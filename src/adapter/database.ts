import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class Databases {
  static async createList(title:string): Promise<number> {
    const list = await prisma.list.create({
      data: {
        title: title
      }
    });
    return list.id;
  }

  static async getList(): Promise<unknown> {
    return await prisma.list.findMany({
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
        },

      }
    });
  }

  static async createTask(title:string,listId:number): Promise<any> {
    const count = await prisma.task.count({
      where: {
        listId: listId
      }
    }
    );
    const task = await prisma.task.create({
      data: {
        title: title,
        listId: listId,
        order : String(count * 10)
      }
    });
    return task;
  }

  static async updateTask(id:number,title:string): Promise<void> {
    await prisma.task.update({
      where : {
        id: id
      },
      data: {
        title: title,
      }
    });
    return;
  }

  static async moveTask(id:number,order:string): Promise<void> {
    await prisma.task.update({
      where : {
        id: id
      },
      data: {
        order: order,
      }
    });
    return;
  }

}   


export default Databases;