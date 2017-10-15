// ----------------------
// IMPORTS

/* NPM */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// HOC/decorator to listen to Redux store state
import { connect } from 'react-redux';

import { Modal, Transition } from 'react-bootstrap';

import { toggleLoginModal } from '../../../store/actions';

// ----------------------
// STYLING
const FADE_DURATION = 200;

const styles = {
  modal : {
    position: 'fixed',
    zIndex: 1040,
    top: 0, bottom: 0, left: 0, right: 0,
  },
  modalBackdrop : {
    position: 'fixed',
    top: 0, bottom: 0, left: 0, right: 0,
    zIndex: 'auto',
    backgroundColor:'#000',
    opacity: 0.5
  },
  modalTextContainer : {
    position: 'absolute',
    width: '90%',
    height: '80%',
    top: '50%', left: '50%',
    transform: `translate(-${50}%, -${50}%)`,
    border: '1px solid #fff555',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20,
    textAlign: 'center'
  }
};

// -----------------------
// REDUX

// @connect accepts a function that takes the full Redux state, and then
// returns the portion of state that our component cares about.  In this example,
// we're listening to `state.counter`, which we can show inside the component
@connect(state => ({ loginModal: state.loginModal }))
class LoginModal extends Component {
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

  render() {
    return (
      // <Transition
      //   in={true}
      //   timeout={FADE_DURATION}
      //   className='fade'
      //   enteredClassName='in'
      //   enteringClassName='in'>
        <Modal
          show={this.props.loginModal.show}
          onHide={() => {this.props.dispatch(toggleLoginModal(false))}}
          style={styles.modal}
          backdropStyle={styles.modalBackdrop}>
          <Modal.Body style={styles.modalTextContainer}>
            <a>Link 1</a><br />
            <a>Link 2</a>
          </Modal.Body>
        </Modal>
      // </Transition>
    );
  }
}

export default LoginModal;
