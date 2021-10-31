import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    themes: [Theme]
  }

  type Theme {
    _id: ID!
    name: String!
    primary: Color!
    backgrounds: [Color!]
    accents: [Color!]
    typefaces: [Color!]
  }

  type Color {
    _id: ID!
    color: String!
  }

  type Query {
    users: [User!]
    themes: [Theme!]
    colors: [Color!]
    user(id: ID!): User
    theme(id: ID!): Theme
    color(id: ID!): Color
  }

`;

export default typeDefs;
