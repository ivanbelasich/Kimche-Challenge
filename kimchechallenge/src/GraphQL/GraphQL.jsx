import { gql } from "@apollo/client";

export const ALL_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
      currency
      languages {
        name
      }
      capital
      continent {
        name
      }
    }
  }
`;
