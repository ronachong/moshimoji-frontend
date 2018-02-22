// ----------------------
// IMPORTS

/* NPM */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// HOC/decorator to listen to Redux store state
import { connect } from 'react-redux';

import { Modal, Transition } from 'react-bootstrap';

import config from 'kit/config';
import { showLoginModal } from 'src/store/actions';

// ----------------------
// STYLING
const FADE_DURATION = 200;

const styles = {
  modalBackdrop : {
    backgroundColor:'#000',
    opacity: 0.5
  },
  modalTextContainer : {
    borderRadius: '100px',
    backgroundColor: 'white',
    padding: '75px 50px',
    textAlign: 'center'
  }
};

// -----------------------
// REDUX

// @connect accepts a function that takes the full Redux state, and then
// returns the portion of state that our component cares about.  In this example,
// we're listening to `state.loginModal`, which we can show inside the component
// TODO: add prop types, default prop values
// TODO: add docstrings
// TODO: consider making this into stateless functional component
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

  handleSubmit(loginDest, e) {
    e.preventDefault()
    const data = new FormData(this.form);
    fetch(config.jwtEndpoint, {
      method: 'POST',
      body: data,
    })
      .then(res => {
        res.json().then(resJson => {
          if (resJson.token) {
            localStorage.setItem('token', resJson.token);
            window.location.replace(loginDest);
          }
        });
      })
      .catch(err => {
        console.log(`Network error: ${err}`);
      });
  }

  render() {
    // TODO: add logic to compute destination dynamically.
    // can be dashboard or home/site news, depending on origin
    // of modal (dashboard button or link preceding)
    const loginDest = '/dashboard'
    console.log('this.props.loginModal.show:', this.props.loginModal.show)
    return (
      <Modal
        show={this.props.loginModal.show}
        onHide={() => {this.props.dispatch(showLoginModal(false))}}
        animation={false}
        backdropStyle={styles.modalBackdrop}
      >
        <Modal.Body style={styles.modalTextContainer}>
          <form
            ref={ref => (this.form = ref)}
            onSubmit={e => this.handleSubmit(loginDest, e)}
          >
            <div>
              <label>Username:</label>
              <input type="text" name="slug" />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" name="password" />
            </div>
            <button type="submit">Login</button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default LoginModal;
