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
    hyperlink_unclicked: Color
    hyperlink_clicked: Color
  }

  type Color {
    _id: ID!
    color: String!
    shade: Float!
    tint: Float!
    shadeEnabled: Boolean!
    tintEnabled: Boolean!
  }

  type Query {
    users: [User!]
    themes: [Theme!]
    colors: [Color!]
    user(id: ID!): User
    theme(id: ID!): Theme
    color(id: ID!): Color
  }

  type Mutation {
    # Color mutations.
    addColor(color: String!): Color
    changeColor(_id: ID!, color: String!): Color
    changeTintOrShade(id: ID!, tint: Float, shade: Float, tintEnabled: Boolean, shadeEnabled: Boolean): Color
    
    # Theme mutations.
    addTheme(name: String!, primary: Color!, backgrounds: [Color!], accents: [Color!], typefaces: [Color!],
      hyperlink_unclicked: Color, hyperlink_clicked: Color): Theme
    updateTheme(id: ID!, name: String, primary: Color, backgrounds: [Color!], accents: [Color!],
      typefaces: [Color!], hyperlink_unclicked: Color, hyperlink_clicked: Color)

    # User mutations.
    addThemeToUser(userId: ID!, themeId: ID!)
    removeThemeFromUser(userId: ID!, themeId: ID!)
  }
`;

export default typeDefs;
