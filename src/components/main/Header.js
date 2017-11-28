// ----------------------
// IMPORTS

/* NPM */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

/* Moshimoji */
// child components
import { UIStateComponentContainer } from 'src/components/base';
import { ReduxDashboardLinkOrButton } from 'src/components/main';

// Redux actions
import { showLoginModal } from 'src/store/actions';

// ----------------------
// COMPONENT: LoginLogoutPlaceholder
const LoginLogoutPlaceholder = () => (
  <span>Please wait to login or logout.</span>
);


// ----------------------
// COMPONENT: RegisterButton
// TODO: complete - currently a stub
// TODO: implement Button component
const RegisterButton = () => (
  <button>register</button>
);


// ----------------------
// COMPONENT: LoginButton
// TODO: implement Button component

const LoginButton = ({ showLoginModal }) => (
  <button onClick={() => showLoginModal(true)}>login</button>
);

LoginButton.propTypes = {
  showLoginModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    showLoginModal: value => (dispatch(showLoginModal(value))),
  }
);

const ReduxLoginButton = connect(null, mapDispatchToProps)(LoginButton);


// ----------------------
// COMPONENT: LogoutButton
// TODO: implement Button component
const LogoutButton = () => {
  const handleClick = () => {
    localStorage.removeItem('token');
    window.location.replace('/');
  };

  return <button onClick={handleClick}>logout</button>;
};


// ----------------------
// COMPONENT: Header
// Header is a HOC specifying what presentational components to display above
// nav, based on UI state.
// TODO: double-check with others about guidelines as to when to requery
// Apollo cache as opposed to passing down query results to components
const Header = ({ dataLoading, userAuthed }) => {
  const UIState = {
    runOnServer: SERVER,
    dataLoading,
    userAuthed,
  };
  const cases = {
    thingsShouldBeDisabled: () => (
      <div>
        <div><LoginLogoutPlaceholder /></div>
        <ReduxDashboardLinkOrButton disabled userAuthed />
      </div>
    ),
    get runOnServer() {
      return this.thingsShouldBeDisabled;
    },
    get dataLoading() {
      return this.thingsShouldBeDisabled;
    },
    userAuthed: () => (
      <div>
        <div><LogoutButton /></div>
        <ReduxDashboardLinkOrButton userAuthed={userAuthed} />
      </div>
    ),
    userAnon: () => (
      <div>
        <div><ReduxLoginButton /> or <RegisterButton /> to access</div>
        <ReduxDashboardLinkOrButton userAuthed={userAuthed} />
      </div>
    ),
  };

  return <UIStateComponentContainer UIState={UIState} cases={cases} />;
};

Header.propTypes = {
  dataLoading: PropTypes.bool.isRequired,
  userAuthed: PropTypes.bool.isRequired,
};

export default Header;
