import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000"
  //   uri: "https://48p1r2roz4.sse.codesandbox.io"
});

export { client };
