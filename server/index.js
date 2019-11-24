import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer, PubSub } from 'apollo-server-express';
// import mongoose from 'mongoose';
// import cors from 'cors';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

dotenv.config();


// const corsOption = {
//   origin: true,
//   credentials: true,
// };


const pubsub = new PubSub();
const server = new ApolloServer({ typeDefs, resolvers, context: { pubsub } });

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
// app.use(cors(corsOption));
server.applyMiddleware({ app });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.send('Express server start!');
});

app.listen(8080, () => {
  console.log(`서버가 작동중이에요! http://localhost:8080${server.graphqlPath}`);
});
