// Now, let's create a GraphQL-enabled component...

// ... then, let's create the component and decorate it with the `graphql`
// HOC that will automatically populate `this.props` with the query data
// once the GraphQL API request has been completed

// ----------------------
// IMPORTS

/* NPM */

import React from 'react';
import PropTypes from 'prop-types';

// GraphQL
import { graphql } from 'react-apollo';

/* App */

// GraphQL queries.  Looking at this file demonstrates how to import fragments.
// Webpack will compile this into inline GraphQL for us, so we can pass the
// query to components using the @graphql decorator
//import allMessages from 'src/graphql/queries/all_messages.gql';
import allUserStatuses from 'src/graphql/queries/all_user_statuses.gql';

// ----------------------

// Since this component needs to 'listen' to GraphQL data, we wrap it in
// `react-apollo`'s `graphql` HOC/decorator and pass in the query that this
// component requires.   Note: This is not to be confused with the `graphql`
// lib, which is used on the server-side to initially define the schema
@graphql(allUserStatuses)
export default class GraphQLMessage extends React.PureComponent {
  // TODO: create a function to generate gql from proptypes or vice versa, or
  // from a common object (would I need to refer to schema for field types?),
  // if that will save me time

  static propTypes = {
    data: PropTypes.shape({
      allUserStatuses: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
          }).isRequired
        }).isRequired).isRequired
      }).isRequired,
    }).isRequired,
  }

  static defaultProps = {
    data: {
      allUserStatuses: {
        edges: [
          {
            node: {
              id: 0,
              text: 'default text',
            }
          }
        ]
      },
    },
  }

  render() {
    const { data } = this.props;
    // Since we're dealing with async GraphQL data, we defend against the
    // data not yet being loaded by checking to see that we have the `message`
    // key on our returned object
    //   const message = data.message && data.message.text;
    // TODO: understand how this line^ works

    // Apollo will tell us whether we're still loading.  We can also use this
    // check to ensure we have a fully returned response
    const isLoading = data.loading ? 'yes' : 'nope';
    const message = (isLoading == 'nope') ?
      data.allUserStatuses.edges[0].node.text : 'None'
    return (
      <div>
        <h2>Message from GraphQL server: <em>{message}</em></h2>
        <h2>Currently loading?: {isLoading}</h2>
      </div>
    );
  }
}
