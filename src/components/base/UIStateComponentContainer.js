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
    return cases.RunOnServer();
  }
  if (UIState.dataLoading) {
    return cases.DataLoading();
  }
  return (UIState.userAuthed) ?
    cases.UserAuthed() :
    cases.UserAnon();
};

UIStateComponentContainer.propTypes = {
  UIState: PropTypes.shape({
    runOnServer: PropTypes.bool.isRequired,
    dataLoading: PropTypes.bool.isRequired,
    userAuthed: PropTypes.bool.isRequired,
  }).isRequired,
  cases: PropTypes.shape({
    RunOnServer: PropTypes.func.isRequired,
    DataLoading: PropTypes.func.isRequired,
    UserAuthed: PropTypes.func.isRequired,
    UserAnon: PropTypes.func.isRequired,
  }).isRequired,
};
