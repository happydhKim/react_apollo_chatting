import { GraphQLServer } from 'graphql-yoga';
import resolvers from './schema/resolvers';

const server = new GraphQLServer({
  typeDefs: './schema/schema.graphql',
  resolvers
});

server.start(() => console.log('GraphQL Server Start!'));