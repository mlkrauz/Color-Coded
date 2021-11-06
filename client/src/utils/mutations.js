import { gql } from '@apollo/client';

/**
 * Auth mutations.
 */
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $name: String!
    $email: String!
    $password: String!
    $themes: [ID]
  ) {
    addUser(
      name: $name
      email: $email
      password: $password
      themes: $themes
    ) {
      token
      user {
        _id
      }
    }
  }
`;

/**
 * User mutations.
 */
export const ADD_THEME_TO_USER = gql`
  mutation addThemeToUser(
    $userId: ID!
    $themeId: ID!
  ) {
    addThemeToUser(
      userId: $userId
      themeId: $themeId
    ) {
      _id
      name
      email
      themes {
        _id
        name
      }
    }
  }
`;

export const REMOVE_THEME_FROM_USER = gql`
  mutation removeThemeFromUser(
    $userId: ID!
    $themeId: ID!
  ) {
    removeThemeFromUser(
      userId: $userId
      themeId: $themeId
    ) {
      _id
      name
      email
      themes {
        _id
        name
        locked
      }
    }
  }
`;

/**
 * Theme mutations.
 */
export const ADD_THEME = gql`
  mutation addTheme(
    $name: String
    $primary: ID!
    $backgrounds: [ID]
    $accents: [ID]
    $typefaces: [ID]
    $hyperlink_unclicked: ID
    $hyperlink_clicked: ID
  ) {
    addTheme(
      name: $name
      primary: $primary
      backgrounds: $backgrounds
      accents: $accents
      typefaces: $typefaces
      hyperlink_unclicked: $hyperlink_unclicked
      hyperlink_clicked: $hyperlink_clicked
    ) {
      _id
      name
      locked
      primary {
        _id
        color
      }
      backgrounds {
        _id
        color
      }
      accents {
        _id
        color
      }
      typefaces {
        _id
        color
      }
      hyperlink_unclicked {
        _id
        color
      }
      hyperlink_clicked {
        _id
        color
      }
    }
  }
`;

export const UPDATE_THEME = gql`
  mutation updateTheme(
    $id: ID!
    $name: String
    $locked: Boolean
    $primary: ID
    $backgrounds: [ID]
    $accents: [ID]
    $typefaces: [ID]
    $hyperlink_unclicked: ID
    $hyperlink_clicked: ID
  ) {
    updateTheme(
      id: $id
      name: $name
      locked: $locked
      primary: $primary
      backgrounds: $backgrounds
      accents: $accents
      typeface: $typeface
      hyperlink_unclicked: $hyperlink_unclicked
      hyperlink_clicked: $hyperlink_clicked
    ) {
      _id
      name
      locked
      backgrounds {
        _id
        color
      }
      accents {
        _id
        color
      }
      typefaces {
        _id
        color
      }
      hyperlink_unclicked {
        _id
        color
      }
      hyperlink_clicked {
        _id
        color
      }
    }
  }
`;

/**
 * Color mutations.
 */
export const ADD_COLOR = gql`
  mutation addColor(
    $color: String!
  ) {
    addColor(
      color: $color
    ) {
      _id
      color
      tint
      shade
      tintEnabled
      shadeEnabled
    }
  }
`;

export const CHANGE_COLOR = gql`
  mutation changeColor(
    $id: ID!
    $color: String!
  ) {
    changeColor(
      id: $id
      color: $color
    ) {
      _id
      color
      tint
      shade
      tintEnabled
      shadeEnabled
    }
  }
`;

export const CHANGE_TINT_OR_SHADE = gql`
  mutation changeTintOrShade(
    $id: ID!
    $tint: Float
    $shade: Float
    $tintEnabled: Boolean
    $shadeEnabled: Boolean
  ) {
    changeTintOrShade(
      id: $id
      tint: $tint
      shade: $shade
      tintEnabled: $tintEnabled
      shadeEnabled: $shadeEnabled
    ) {
      _id
      color
      tint
      shade
      tintEnabled
      shadeEnabled
    }
  }
`;
