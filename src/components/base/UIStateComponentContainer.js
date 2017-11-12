// ----------------------
// IMPORTS

/* NPM */
import PropTypes from 'prop-types';
import React from 'react';

/* Moshimoji */
// child components

// ----------------------
// COMPONENT: UIStateComponentContainer provides boilerplate for common logic
// dealing with UI state. 'Higher order' components which must determine what
// presentational components to display based on global UI state can build on
// top of this component.
class UIStateComponentContainer extends React.PureComponent {
  static propTypes = {
    runOnServer: PropTypes.bool,
    dataLoading: PropTypes.bool,
    userAuthed: PropTypes.bool,
    caseRunOnServer: PropTypes.func,
    caseDataLoading: PropTypes.func,
    caseUserAuthed: PropTypes.func,
    caseUserAnon: PropTypes.func,
  }
  render() {
    if (runOnServer) {
      return caseRunOnServer()
    }
    if (dataLoading) {
      return caseDataLoading()
    }
    (userAuthed) ?
      caseUserAuthed() :
      caseUserAnon()
}
