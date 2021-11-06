import { gql } from '@apollo/client';

export const QUERY_ALL_USERS = gql`
  query users {
    users {
      _id
      themes {
        _id
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      themes {
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
  }
`;

export const QUERY_ALL_THEMES = gql`
  query themes {
    themes {
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

export const QUERY_SINGLE_THEME = gql`
  query theme($id: ID!) {
    theme(id: $id) {
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

export const QUERY_ALL_COLORS = gql`
  query colors {
    colors {
      _id
      color
      tintEnabled
      shadeEnabled
    }
  }
`;


export const QUERY_SINGLE_COLOR = gql`
  query color($id: ID!) {
    color(id: $id) {
      _id
      color
      tintEnabled
      shadeEnabled
    }
  }
`;
