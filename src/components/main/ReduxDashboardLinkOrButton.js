// ----------------------
// IMPORTS

/* NPM */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

/* Moshimoji */
// child components
import { LinkOrButton } from 'src/components/base';

// Redux actions
import { toggleLoginModal } from 'src/store/actions';


// ----------------------
// COMPONENT: ReduxDashboardLinkOrButton
// ReduxDashboardLinkOrButton is an HOC around LinkOrButton. It specifies
// the display component (dashboard button) and dictates isLink or
// button based on the userAuthed prop.

// TODO: add styling to disabled display component to indicate deactivation
// TODO: add prop types
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
