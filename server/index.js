import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
// import mongoose from 'mongoose';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

dotenv.config();

const server = new ApolloServer({ typeDefs, resolvers });

// mongoose.connect(process.env.DB_URL, {
//   dbName: process.env.DB_NAME,
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// }, (error) => {
//   if (error) {
//     console.log('mongodb connect error', error);
//   } else {
//     console.log('mongodb connect success!');
//   }
// });

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
