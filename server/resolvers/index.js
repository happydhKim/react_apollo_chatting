import {
  people, getById, getMovie, getMovies, getSuggestions,
} from '../models';

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id),
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;
