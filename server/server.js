import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { join } from 'path';
import dotenv from 'dotenv';
import db from './config/connection.js';
//import routes from './routes';
import { typeDefs, resolvers } from './schemas/index.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../client/build')));
}

//app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Now listening on localhost: ${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
