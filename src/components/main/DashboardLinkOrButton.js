// ----------------------
// IMPORTS

/* NPM */
import React from 'react';
import { connect } from 'react-redux'; // HOC/decorator to listen to Redux store state
import PropTypes from 'prop-types';

/* Moshimoji */
// components
import LinkOrButton from 'src/components/reused/LinkOrButton';

// Redux actions
import { toggleLoginModal } from 'src/store/actions';


// ----------------------
// COMPONENT
// DashboardLinkOrButton is an HOC around LinkOrButton. It specifies
// the display component (dashboard button) and dictates isLink or
// button based on the currentUser prop.

// TODO: figure out if this I should rewrite this as a stateless functional cmp
// TODO: consider refactoring this and LinkOrButton;
// TODO: determine if it make sense to store things as class attrs instead of state
// TODO: determine if propsToPass really makes sense, or if I can/should pass uri,
// onClick, separately
// TODO: figure out if isLink logic should be moved elswhere
@connect()
class DashboardLinkOrButton extends React.PureComponent {
  static propTypes = {
    currentUser: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    // TODO: figure out if this should be setState instead
    if (this.props.currentUser) {
      this.isLink = true;
      this.propsToPass = {
        uri: '/dashboard/site',
      };
    } else {
      this.isLink = false;
      this.propsToPass = {
        onClick: () => {
          console.log('dashboard button was clicked');
          this.props.dispatch(toggleLoginModal(true));
        },
      };
    }
  }

  render() {
    const DisplayComponent = ({ onClick }) => (
      <button onClick={onClick}>dashboard</button>
    );

    return (
      <LinkOrButton
        DisplayComponent={DisplayComponent}
        isLink={this.isLink}
        propsToPass={this.propsToPass} />
    );
  }
}

export default DashboardLinkOrButton;
