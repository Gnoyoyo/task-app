
import { gql } from 'apollo-server'

const typeDefs = gql`
  type List {
    id: Int
    title: String
    tasks: [Task]
  }

  type Task {
    title: String
    status: String
    order: String
  }
  type Query {
    lists: [List]
  }

  type Mutation {
    createList(title: String): List
    createTask(title: String, listId:Int): Task
    updateTask(id: Int, title: String): Task
    moveTask(id: Int, order: String): Task
  }
`;

export default typeDefs
