// ----------------------
// IMPORTS

/* NPM */
import React from 'react';

// HOC/decorator to listen to Redux store state
import { connect } from 'react-redux';

// components
import LinkOrButton from 'src/components/reused/LinkOrButton';

// Redux actions
import { toggleLoginModal } from '../../../store/actions';


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
    // counter: PropTypes.shape({
    //   count: PropTypes.number.isRequired,
    // }),
  };

  static defaultProps = {
    // counter: {
    //   count: 0,
    // },
  }

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
        }
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
