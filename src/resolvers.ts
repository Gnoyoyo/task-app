import TaskController from "./controller/task";
import ListController from "./controller/list";

const resolvers = {
  Query: {
    lists: async (): Promise<any> => await ListController.getList(),
  },
  Mutation:{
    createList: async (_: void,{title}: any) => await ListController.createList(title),
    createTask: async (_: void,{title,listId}: any) => await TaskController.createTask(title,listId),
    updateTask: async (_: void,{id,title}: any) => await TaskController.updateTask(id,title),
    moveTask: async (_: void,{id,order}: any) => await TaskController.moveTask(id,order),
  }
};
  
export default resolvers