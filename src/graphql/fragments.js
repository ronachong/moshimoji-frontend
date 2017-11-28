import { gql } from 'react-apollo';

const fragments = {
  nodeDetails: gql`
    fragment NodeDetails on Node {
      __typename
      id
    }
  `,
  get userStatusForList () {
    return (gql`
      fragment UserStatusForList on UserStatusNode {
        ...NodeDetails
        creationDate
        text
      }
      ${this.nodeDetails}
    `);
  },
};

export default fragments;
