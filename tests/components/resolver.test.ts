import { ApolloServer,gql} from "apollo-server";
import typeDefs from "../../src/typeDefs"
import resolvers from "../../src/resolvers"

describe("Task Manager Validity", () => {

  it('Should get List', async () => {
    const server = new ApolloServer({
      typeDefs,
      resolvers
    });
    const GET_LIST = gql`
    query GetList {
      lists {
        id
        title
        tasks {
          id
          title
          status
        }
        }
      }
    `;
  
    const res = await server.executeOperation({ query: GET_LIST, variables: {} });
    expect(res).toBeDefined();
  });

  it('Should create List', async () => {
    const server = new ApolloServer({
      typeDefs,
      resolvers
    });
    const CREATE_LIST = gql`
    mutation CreateList {
  createList(title:"test1"){
    title
    id
  }
}
    `;
  
    const res = await server.executeOperation({ query: CREATE_LIST, variables: {} });
    console.log(res);
    expect(res).toBeDefined();
  });

});