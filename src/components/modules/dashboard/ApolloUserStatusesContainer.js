import React from 'react';
import { gql, graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import fragments from 'src/graphql/fragments';

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

// I can create stateless functional components which receive data from apollo,
// if I use the graphql(query)(component) pattern (instead of class decorator).
const UserStatusesContainer = ({ loading, allUserStatuses, loadMoreEntries }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  const presentation = (!allUserStatuses) ? <p>Error retrieving data</p>
    : <UserStatusesPresentation userStatusEdges={allUserStatuses.edges} />;

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

// TODO: (high) update to only query statuses by currentUser
// TODO: (med) consider renaming Container to List for consistency
// TODO: add orderByArg when implemented in Schema
const userStatusesContainerQuery = gql`
  query UserStatuses($cursor: String) {
    allUserStatuses(first: 5, after: $cursor) {
      edges {
        node {
          ...UserStatusForList
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${fragments.userStatusForList}
`;

// TODO: create a function to generate gql from proptypes or vice versa, or
// from a common object (would I need to refer to schema for field types?),
// if that will save me time
// TODO: (high) update prop types
UserStatusesContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  allUserStatuses: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        creationDate: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired).isRequired,
    pageInfo: PropTypes.shape({
      endCursor: PropTypes.string,
      hasNextPage: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  loadMoreEntries: PropTypes.func.isRequired,
};

UserStatusesContainer.defaultProps = {
  allUserStatuses: {
    edges: [
      {
        node: {
          id: 'fakeid',
          creationDate: 'date str',
          text: 'default text',
        },
      },
    ],
    pageInfo: {
      endCursor: null,
      hasNextPage: false,
    },
  },
};

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

export { userStatusesContainerQuery };
export default ApolloUserStatusesContainer;
