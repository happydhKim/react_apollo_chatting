import { gql } from 'apollo-server-express';

const typeDefs = gql`

type Movie {
  id: Int!
  title: String!
  rating: Float
  description_intro: String
  language: String
  medium_cover_image: String
  genres: [String]
}
type Person {
  id: Int!,
  name: String!,
  age: Int!,
  gender: String!
}

type Query {
  people: [Person]!
  person(id: Int!): Person
  movies(limit: Int, rating: Float): [Movie]!
  movie(id: Int!): Movie
  suggestions(id: Int!): [Movie]!
}
`;

export default typeDefs;
