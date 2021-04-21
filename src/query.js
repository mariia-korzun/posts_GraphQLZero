import { gql } from '@apollo/client';

const FETCH_DATA = gql`
query ($options: PageQueryOptions!) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;

export {FETCH_DATA}