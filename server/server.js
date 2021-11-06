import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import path, { resolve } from 'path';
import dotenv from 'dotenv';
import helmet from 'helmet';
import db from './config/connection.js';
import { authMiddleware } from './utils/auth.js';
import { typeDefs, resolvers } from './schemas/index.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// The variable __dirname is not exposed by node when using ES6 module imports.
// We can recreate __dirname with an empty path.resolve()
const dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(resolve(dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(resolve(dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Now listening on localhost: ${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
