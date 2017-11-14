// ----------------------
// IMPORTS

/* NPM */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux'; // HOC/decorator to listen to Redux store state

/* Moshimoji */
// child components
import { LinkOrButton } from 'src/components/base';
import { ReduxLoginButton } from 'src/components/main/Header'

// Redux actions
import { toggleLoginModal, printLoginModalState } from 'src/store/actions';


// ----------------------
// COMPONENT: DashboardLinkOrButton
// DashboardLinkOrButton is an HOC around LinkOrButton. It specifies
// the display component (dashboard button) and dictates isLink or
// button based on the currentUser prop.

// TODO: implement disabled bool prop
// TODO: add styling to disabled display component to indicate deactivation
const DashboardLinkOrButton = ({ disabled, userAuthed, toggleLoginModal }) => {

  const DisplayComponent = ({ onClick }) => (
    <button onClick={onClick}>dashboard</button>
  );

  if (disabled) {
    return <DisplayComponent />;
  }

  return (
    <LinkOrButton
      DisplayComponent={DisplayComponent}
      isLink={userAuthed}
      onClick={() => toggleLoginModal(true)}
      uri={'/dashboard/site'} />
  );
};

const mapDispatchToProps = dispatch => (
  {
    toggleLoginModal: value => (dispatch(toggleLoginModal(value))),
  }
);

const ReduxDashboardLinkOrButton = connect(null, mapDispatchToProps)(DashboardLinkOrButton);

export default ReduxDashboardLinkOrButton;
