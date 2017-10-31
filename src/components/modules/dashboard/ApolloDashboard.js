import React from 'react';
import { gql, graphql } from 'react-apollo';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { toggleLoginModal } from 'src/store/actions';
import ApolloUserStatusForm from 'src/components/modules/dashboard/ApolloUserStatusForm';
import ApolloUserStatusesContainer from 'src/components/modules/dashboard/ApolloUserStatusesContainer';

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

// TODO: (med) add prop types
// TODO: (med) update component to show form errors
let Dashboard = ({ data, toggleLoginModal }) => {
  if (data.loading) {
    return <div>Loading...</div>; // TODO: maybe make this inactive cmps instead
  }

  // TODO: hook component to apollo to toggle login modal if user not logged in
  // TODO: also, figure out what should happen if we're using server response
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

Dashboard = connect(null, mapDispatchToProps)(Dashboard);
const ApolloDashboard = graphql(dashboardQuery)(Dashboard);

export default ApolloDashboard;
