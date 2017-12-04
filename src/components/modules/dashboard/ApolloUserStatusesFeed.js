// ----------------------
// IMPORTS

/* NPM */
import React from 'react';
import { gql, graphql } from 'react-apollo';
import PropTypes from 'prop-types';

/* Moshimoji */
// graphql
import fragments from 'src/graphql/fragments';

// child components
import UserStatuses from 'src/components/modules/dashboard/UserStatuses';

// ----------------------
// COMPONENT: UserStatusesFeed
// UserStatusesFeed is a pre-Apollo container for display of
// user statuses. It has loading, presentation, and error directives.

// TODO: create a base HOC for populated lists with load more functionality.
// Note: I can create stateless functional components which receive data from apollo,
// if I use the graphql(query)(component) pattern (instead of class decorator).
const UserStatusesFeed = ({ loading, allUserStatuses, loadMoreEntries }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  const presentation = (!allUserStatuses) ? <p>Error retrieving data</p>
    : <UserStatuses userStatusEdges={allUserStatuses.edges} />;

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
// TODO: add orderByArg when implemented in Schema
const userStatusesFeedQuery = gql`
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
UserStatusesFeed.propTypes = {
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

UserStatusesFeed.defaultProps = {
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

const ApolloUserStatusesFeed = graphql(userStatusesFeedQuery, {
  props({ data: { loading, allUserStatuses, fetchMore } }) {
    return {
      loading,
      allUserStatuses,
      loadMoreEntries: () => (
        fetchMore({
          query: userStatusesFeedQuery,
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
})(UserStatusesFeed);

export { userStatusesFeedQuery };
export default ApolloUserStatusesFeed;
