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
import { showLoginModal } from 'src/store/actions';


// ----------------------
// COMPONENT: ReduxDashboardLinkOrButton
// ReduxDashboardLinkOrButton is an HOC around LinkOrButton. It specifies
// the display component (dashboard button) and dictates isLink or
// button based on the userAuthed prop.

// TODO: add styling to disabled display component to indicate deactivation
const DashboardLinkOrButton = ({ disabled, userAuthed, showLoginModal }) => {
  const DisplayComponent = ({ onClick }) => (
    <button onClick={onClick}>dashboard</button>
  );

  DisplayComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  DisplayComponent.defaultProps = {
    onClick: () => (null),
  }

  if (disabled) {
    return <DisplayComponent />;
  }

  return (
    <LinkOrButton
      DisplayComponent={DisplayComponent}
      isLink={userAuthed}
      onClick={() => showLoginModal(true)}
      uri={'/dashboard/site'} />
  );
};

DashboardLinkOrButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  userAuthed: PropTypes.bool.isRequired,
  showLoginModal: PropTypes.func.isRequired,
};

DashboardLinkOrButton.defaultProps = {
  disabled: false,
};

const mapDispatchToProps = dispatch => (
  {
    showLoginModal: value => (dispatch(showLoginModal(value))),
  }
);

const ReduxDashboardLinkOrButton = connect(null, mapDispatchToProps)(DashboardLinkOrButton);

export default ReduxDashboardLinkOrButton;
