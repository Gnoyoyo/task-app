//TODO: Setup Project ✅

//TODO: Setup Route ✅

//TODO: Setup Database ✅

//TODO: Setup Controller 

//TODO: Setup Test

//TODO: Business Logic

//TODO: Refractor Code


/* 
TASK : 
    Create a new List
    Create a new task in a list
        New task must be prepend and not has been complete
    Update a task (title and status)
    Move a task to a specfic position in the list
    Retrieve all lists and their tasks
*/

//Setup Apollo Server
import { ApolloServer, gql } from "apollo-server";
// import database from "./adapter/mock-database";
import database from "./adapter/database";
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type List {
    id: Int
    title: String
    tasks: [Task]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
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

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    lists: async () => await database.getList(),
  },
  Mutation:{
    createList: async (_: void,{title}: any) => await database.createList(title),
    createTask: async (_: void,{title,listId}: any) => await database.createTask(title,listId),
    updateTask: async (_: void,{id,title}: any) => await database.updateTask(id,title),
    moveTask: async (_: void,{id,order}: any) => await database.moveTask(id,order),
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});