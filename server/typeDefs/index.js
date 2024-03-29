import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Chat {
    id: ID!
    content: String!
    from: String!
    createdAt: String!
  }

  type Query {
    chats: [Chat]
  }

  type Mutation {
    createChat(content: String!, from: String!) : Chat
  }
  
  type Subscription {
    messageSent: Chat
  }
`;

export default typeDefs;
