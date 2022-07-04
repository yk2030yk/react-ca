import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://$replace-graphql-domain",
  cache: new InMemoryCache(),
});
