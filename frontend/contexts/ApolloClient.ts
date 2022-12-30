import {ApolloClient, InMemoryCache} from "@apollo/client";


export const apolloClient = new ApolloClient({
  uri: process.env.STRAPI_GQL_LINK,
  cache: new InMemoryCache(),
});