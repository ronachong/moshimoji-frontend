import React from 'react';
import { gql, graphql } from 'react-apollo';
import PropTypes from 'prop-types';


// TODO: (high) update to only query statuses by currentUser
const userStatusesContainerQuery = gql`
query UserStatuses($cursor: String) {
  allUserStatuses(first: 5, after: $cursor, orderBy: "-creation_date") {
    edges {
      node {
        id,
        creationDate,
        text
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
`;

// I can create stateless functional components which receive data from apollo,
// if I use the graphql(query)(component) pattern (instead of class decorator).
const UserStatusesContainer = ({loading, allUserStatuses, loadMoreEntries}) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  const presentation = (!allUserStatuses) ? <p>Error retrieving data</p> :
    <UserStatusesPresentation userStatusEdges={allUserStatuses.edges} />

  if (!allUserStatuses) {
    return <p>Error retrieving data</p>;
  }

  return (
    <div>
      <h3>User Statuses</h3>
      {presentation}
      <button onClick={loadMoreEntries}>load more</button>
    </div>
  );
};


// TODO: create a function to generate gql from proptypes or vice versa, or
// from a common object (would I need to refer to schema for field types?),
// if that will save me time
// UserStatusesContainer.propTypes = {
//   data: PropTypes.shape({
//     allUserStatuses: PropTypes.shape({
//       edges: PropTypes.arrayOf(PropTypes.shape({
//         node: PropTypes.shape({
//           id: PropTypes.string.isRequired,
//           creationDate: PropTypes.string.isRequired,
//           text: PropTypes.string.isRequired,
//         }).isRequired,
//       }).isRequired).isRequired,
//     }).isRequired,
//   }).isRequired,
// };
//
UserStatusesContainer.defaultProps = {
  data: {
    allUserStatuses: {
      edges: [
        {
          node: {
            id: 0,
            creationDate: 'date str',
            text: 'default text',
          },
        },
      ],
      pageInfo: {
        startCursor: null,
        hasPreviousPage: null,
      },
    },
  },
};
//
// allUserStatuses(last: 2, before: $cursor) {
//   edges {
//     node {
//       id,
//       creationDate,
//       text
//     }
//   }
//   pageInfo {
//     endCursor
//     hasPreviousPage
//   }
// }
// }

const ApolloUserStatusesContainer = graphql(userStatusesContainerQuery, {
  props({ data: { loading, allUserStatuses, fetchMore } }) {
    return {
      loading,
      allUserStatuses,
      loadMoreEntries: () => (
        fetchMore({
          query: userStatusesContainerQuery,
          variables: {
            cursor: allUserStatuses.pageInfo.endCursor,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const newEdges = fetchMoreResult.allUserStatuses.edges;
            const pageInfo = fetchMoreResult.allUserStatuses.pageInfo;

            return {
              allUserStatuses: {
                edges: [...previousResult.allUserStatuses.edges, ...newEdges],
                pageInfo,
              },
            };
          },
        })
      ),
    };
  },
})(UserStatusesContainer);

const UserStatusesPresentation = ({ userStatusEdges }) => (
  <div>
    {userStatusEdges.map(userStatus => (
      <p key={userStatus.node.id}>
        '{userStatus.node.text}' created {userStatus.node.creationDate}
      </p>
    ))}
  </div>
);

UserStatusesPresentation.propTypes = {
  userStatusEdges: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      id: PropTypes.string.isRequired,
      creationDate: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired).isRequired,
};

export default ApolloUserStatusesContainer;
