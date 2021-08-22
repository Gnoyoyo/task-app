import TaskController from "./controller/task";
import ListController from "./controller/list";
import * as Type from "./types"

const resolvers = {
  Query: {
    lists: async (): Promise<Type.List> => await ListController.getList(),
  },
  Mutation:{
    createList: async (_: void,{title}: Type.MutationCreateListArgs) : Promise<Type.Mutation> => {
      if(title){
        return await ListController.createList({
          title: title,
        });
      }else{
        throw "ERROR"
      }
    },
    createTask: async (_: void,{title,listId}: Type.MutationCreateTaskArgs) : Promise<Type.Mutation> => {
      if(title && listId){
        const task = await TaskController.createTask(title,listId)
        return task;
      }else{
        throw "ERROR"
      }
    },
    updateTask: async (_: void,{id,title,status,order}: Type.MutationUpdateTaskArgs) : Promise<Type.Mutation> => {

      if(id){
        const task = await TaskController.updateTask({
          id:id,
          title:title,
          status:status,
          order:order
        })
        return task;
      }else{
        throw "ERROR"
      }
    }
  }
};
  
export default resolvers