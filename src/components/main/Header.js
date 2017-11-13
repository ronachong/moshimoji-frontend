// ----------------------
// IMPORTS

/* NPM */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

/* Moshimoji */
// child components
import { UIStateComponentContainer } from 'src/components/base';
import { DashboardLinkOrButton } from 'src/components/main';

// Redux actions
import { toggleLoginModal } from 'src/store/actions';

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

const LoginButton = ({ toggleLoginModal }) => (
  <button onClick={() => toggleLoginModal(true)}>login</button>
);

const mapDispatchToProps = dispatch => (
  {
    toggleLoginModal: value => (dispatch(toggleLoginModal(value))),
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
  }

  handleClick();
  return <button onClick={handleClick}>Stub.</button>;
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
        <LoginLogoutPlaceholder />
        <DashboardLinkOrButton disabled userAuthed />
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
        <LogoutButton />
        <DashboardLinkOrButton userAuthed={userAuthed} />
      </div>
    ),
    userAnon: () => (
      <div>
        <div><ReduxLoginButton /> or <RegisterButton /> to access</div>
        <DashboardLinkOrButton userAuthed={userAuthed} />
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
