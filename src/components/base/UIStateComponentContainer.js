// ----------------------
// IMPORTS

/* NPM */
import PropTypes from 'prop-types';

/* Moshimoji */
// child components

// ----------------------
// COMPONENT: UIStateComponentContainer provides boilerplate for common logic
// dealing with UI state. 'Higher order' components which must determine what
// presentational components to display based on global UI state can build on
// top of this component.
const UIStateComponentContainer = ({ UIState, cases }) => {
  if (UIState.runOnServer) {
    return cases.runOnServer();
  }
  if (UIState.dataLoading) {
    return cases.dataLoading();
  }
  return (UIState.userAuthed) ?
    cases.userAuthed() :
    cases.userAnon();
};

UIStateComponentContainer.propTypes = {
  UIState: PropTypes.shape({
    runOnServer: PropTypes.bool.isRequired,
    dataLoading: PropTypes.bool.isRequired,
    userAuthed: PropTypes.bool.isRequired,
  }).isRequired,
  cases: PropTypes.shape({
    runOnServer: PropTypes.func.isRequired,
    dataLoading: PropTypes.func.isRequired,
    userAuthed: PropTypes.func.isRequired,
    userAnon: PropTypes.func.isRequired,
  }).isRequired,
};

export default UIStateComponentContainer;
