import React from 'react';
import LinkOrButton from 'src/components/reused/LinkOrButton';

// TODO: figure out if this can/should be rewritten as a stateless functional
// component, even if it needs the the dispatch prop (don't think I can use an
// es6 class decorator with a functional component, so can't use @connect)
// TODO: consider refactoring this and LinkOrButton;
// does it make sense to store things in this.state if they aren't changing vals?
// does propsToPass really make sense?
// or can I simply just pass uri, onclick separately?
// should the isLink logic be moved elswhere?
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
    this.state = (this.props.currentUser) ?
      {
        isLink: true,
        propsToPass: {
          uri: '/dashboard/site',
        },
      } :
      {
        isLink: false,
        propsToPass: {
          onClick: () => {
            console.log('dashboard button was clicked');
          },
        },
      };
  }

  render() {
    const DisplayComponent = ({ onClick }) => (
      <button onClick={onClick}>dashboard</button>
    );

    return (
      <LinkOrButton
        DisplayComponent={DisplayComponent}
        isLink={this.state.isLink}
        propsToPass={this.state.propsToPass} />
    );
  }
}

export default DashboardLinkOrButton;
