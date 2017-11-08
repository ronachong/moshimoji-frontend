// ----------------------
// IMPORTS

/* NPM */
import PropTypes from 'prop-types';
import React from 'react';
import { gql, graphql } from 'react-apollo';
import { connect } from 'react-redux';

/* Moshimoji */
// child components
import ApolloUserStatusForm from 'src/components/modules/dashboard/ApolloUserStatusForm';
import ApolloUserStatusesContainer from 'src/components/modules/dashboard/ApolloUserStatusesContainer';

// Redux actions
import { toggleLoginModal } from 'src/store/actions';


// ----------------------
// COMPONENT: Dashboard
// Dashboard is a pre-Apollo container for the components to display for the
// Dashboard module.
// Has: loading, notLoggedIn specs.
const dashboardQuery = gql`
{
  currentUser {
    id
  }
}
`;

const mapDispatchToProps = dispatch => (
  {
    toggleLoginModal: value => (dispatch(toggleLoginModal(value))),
  }
);

// TODO: (med) update component to show form errors
let Dashboard = ({ data, toggleLoginModal }) => {
  if (data.loading) {
    return <div>Loading...</div>; // TODO: maybe make this inactive cmps instead
  }

  // TODO: figure out what should happen if server response
  if (!data.currentUser) {
    toggleLoginModal(true);
    return <div>user not logged in</div>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <ApolloUserStatusForm />
      <ApolloUserStatusesContainer />
    </div>
  );
};

// TODO: (med) figure out if currentUser should be a required prop
Dashboard.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    currentUser: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  toggleLoginModal: PropTypes.func.isRequired,
};

Dashboard = connect(null, mapDispatchToProps)(Dashboard);
const ApolloDashboard = graphql(dashboardQuery)(Dashboard);

export default ApolloDashboard;
