import {GraphQLClient} from 'graphql-request';
import {getSdk} from './sdk';

const client = new GraphQLClient('http://localhost:1337/graphql');
export const graphQlClient = getSdk(client);
