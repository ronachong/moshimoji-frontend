import React from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';

const dashboardQuery = gql`
{
  currentUser {
    id
  }
}
`;

const Dashboard = ({ data }) => {
  if (data.loading) {
    return <div>Loading...</div> // TODO: maybe make this inactive cmps instead
  }

  // TODO: hook component to apollo to toggle login modal if user not logged in
  // also, figure out what should happen if we're using server response
  if (!data.currentUser) {
    return <div>user not logged in</div>
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <ApolloUserStatusForm />
      <ApolloUserStatusesContainer />
    </div>
  )
};

const ApolloDashboard = graphql(dashboardQuery)(Dashboard);

const userStatusFormMutation = gql`
mutation UserStatusForm($text: String!) {
  createUserStatus(text: $text) {
    reqStatus,
    formErrors,
    userStatus {
      id
    }
  }
}
`;

const userStatusFormQuery = gql`
{
  currentUser {
    id
  }
}
`;


const UserStatusForm = ({ data, mutate }) => {
  let form = null;
  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    const status = new FormData(form);
    mutate({ variables: { text: status.get('text') } })
      .then(res => {
        console.log('Res:', res);
        console.log(res.data.createUserStatus.reqStatus);
        if (res.data.createUserStatus.reqStatus === 200) {
          console.log('status submitted successfully');
        }
      })
      .catch(err => {
        console.log(`Network error: ${err}`);
      });
  };

  return (
    <div>
      <h3>Update your status</h3>
      <form
        ref={ref => { form = ref; }}
        onSubmit={e => handleSubmit(e)} >
        <div>
          <textarea name="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

let ApolloUserStatusForm = graphql(userStatusFormQuery)(UserStatusForm);
ApolloUserStatusForm = graphql(userStatusFormMutation)(ApolloUserStatusForm);

const query = gql`
{
  allUserStatuses {
    edges {
      node {
        id,
        creationDate,
        text
      }
    }
  }
}
`;

// I can create stateless functional components which receive data from apollo,
// if I use the graphql(query)(component) pattern (instead of class decorator).
const UserStatusesContainer = ({ data }) => {
  console.log(data);

  if (data.loading) {
    console.log(data);
    return <div>Loading...</div>;
  }

  const presentation = (!data.allUserStatuses) ? <p>Error retrieving data</p> :
    <UserStatusesPresentation user_status_edges={data.allUserStatuses.edges} />

  if (!data.allUserStatuses) {
    return <p>Error retrieving data</p>;
  }

  return (
    <div>
      <h3>User Statuses</h3>
      {presentation}
    </div>
  );
};


// TODO: create a function to generate gql from proptypes or vice versa, or
// from a common object (would I need to refer to schema for field types?),
// if that will save me time
UserStatusesContainer.propTypes = {
  data: PropTypes.shape({
    allUserStatuses: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string.isRequired,
          creationDate: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

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
    },
  },
};

const ApolloUserStatusesContainer = graphql(query)(UserStatusesContainer);

const UserStatusesPresentation = ({ user_status_edges }) => {
  return (
    <div>
      {user_status_edges.map(user_status => (
        <p key={user_status.node.id}>
          '{user_status.node.text}' created {user_status.node.creationDate}
        </p>
      ))}
    </div>
  );
};

UserStatusesPresentation.propTypes = {
  user_status_edges: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      id: PropTypes.string.isRequired,
      creationDate: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired).isRequired,
};

export default ApolloDashboard;