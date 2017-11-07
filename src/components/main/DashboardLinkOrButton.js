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
// TODO: figure out if this I should rewrite this as a stateless functional cmp
// TODO: consider refactoring this and LinkOrButton;
// does it make sense to store things as class attrs?
// does propsToPass really make sense?
// or can I simply just pass uri, onclick separately?
// should the isLink logic be moved elswhere?
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
