
import { gql } from 'apollo-server'

const typeDefs = gql`
  type List {
    id: Int
    title: String
    tasks: [Task]
  }

  type Task {
    id: Int
    title: String
    status: String
  }
  type Query {
    lists: [List]
  }

  type Mutation {
    createList(title: String): List
    createTask(title: String, listId:Int): Task
    updateTask(id: Int, title: String,status:String,order:Int): Task
  }
`;

export default typeDefs
