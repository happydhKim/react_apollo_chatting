import { gql } from 'apollo-server-express';

const typeDefs = gql`
type Query {
  name: String!
}`;

export default typeDefs;
