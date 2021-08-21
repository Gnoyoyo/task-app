class Databases {
  static async createList(title:string): Promise<{title:string}> {
    console.log("Create LIST");
    console.log(title);
    return {
      title : title,
    };
  }

  static async getList(): Promise<unknown> {
    console.log("GET LIST");
    return [{
      title: "Test",
      tasks :[
        {
          title: 'The Awakening',
          status: 'TODO',
          order: "1"
        },
        {
          title: 'City of Glass',
          status: 'DONE',
          order: "2"
        },
      ]
    }]
  }

  static async createTask(title:string,listId:number): Promise<void> {
    console.log("Create" ,title,listId);
    return;
  }

  static async moveTask(id:number,order:string): Promise<void> {
    console.log("Move" ,id,order);
    return;
  }

  static async updateTask(id:number,title:string): Promise<void> {
    console.log("Move" ,id,title);
    return;
  }

}   


export default Databases;