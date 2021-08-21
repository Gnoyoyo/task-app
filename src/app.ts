//TODO: Setup Project

//TODO: Setup Route

//TODO: Setup Database

//TODO: Setup Controller

//TODO: Setup Test

//TODO: Business Logic


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
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type List {
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

  input Input {
    title: String
  }

  type Mutation {
    createList(ListInput: Input): List
    createTask(TaskInput: Input): Task
    updateTask(taskId: ID!, tittle: String): Task
    moveTask(taskId: ID!, order: String): Task
  }

`;


const tasks = [
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
  ];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      tasks: () => tasks,
    },
  };

  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});