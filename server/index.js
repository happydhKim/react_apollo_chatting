import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './schema/resolvers';
import typeDefs from './schema/schema.graphql.js';

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Express server start!');
});

app.listen(4000, () => {
  console.log(`서버가 작동중이에요! http://localhost:4000${server.graphqlPath}`);
});