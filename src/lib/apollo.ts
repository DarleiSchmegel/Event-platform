import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q9tu153j5y01xs81lg6i5q/master',
  cache: new InMemoryCache()
})