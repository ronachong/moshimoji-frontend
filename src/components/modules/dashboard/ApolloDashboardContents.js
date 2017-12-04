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
import ApolloUserStatusesFeed from 'src/components/modules/dashboard/ApolloUserStatusesFeed';

// Redux actions
import { showLoginModal } from 'src/store/actions';


// ----------------------
// COMPONENT CODE

const dashboardQuery = gql`
{
  currentUser {
    id
  }
}
`;

const mapDispatchToProps = dispatch => (
  {
    showLoginModal: value => (dispatch(showLoginModal(value))),
  }
);

/* COMPONENT: DashboardContents */
// DashboardContents is a pre-Apollo container for the components to display for
// the Dashboard module.
// Has: loading, notLoggedIn specs.
// TODO: (med) update component to show form errors
let DashboardContents = ({ data, showLoginModal }) => {
  if (data.loading) {
    return <div>Loading...</div>; // TODO: maybe make this inactive cmps instead
  }

  // TODO: figure out what should happen if server response
  if (!data.currentUser) {
    showLoginModal(true);
    return <div>user not logged in</div>;
  }

  return (
    <div>
      <ApolloUserStatusForm />
      <ApolloUserStatusesFeed />
    </div>
  );
};

// TODO: (med) figure out if currentUser should be a required prop
DashboardContents.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    currentUser: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  showLoginModal: PropTypes.func.isRequired,
};

DashboardContents = connect(null, mapDispatchToProps)(DashboardContents);

/* COMPONENT: ApolloDashboard */
// ApolloDashboard specifies the contents for the Reader module and gets passed
// to Module
const ApolloDashboardContents = graphql(dashboardQuery)(DashboardContents);

ApolloDashboardContents.title = "Dashboard";
ApolloDashboardContents.styles = {};

export default ApolloDashboardContents;
