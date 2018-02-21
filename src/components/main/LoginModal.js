// ----------------------
// IMPORTS

/* NPM */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Transition } from 'react-bootstrap';

/* Moshimoji */
import config from 'kit/config';
import { showLoginModal } from 'src/store/actions';

// -----------------------
// REDUX

// @connect accepts a function that takes the full Redux state, and then
// returns the portion of state that our component cares about.  In this example,
// we're listening to `state.loginModal`, which we can show inside the component
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
    return (
      <Modal
        show={this.props.loginModal.show}
        onHide={() => {this.props.dispatch(showLoginModal(false))}}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>H4 header</h4>
          <p>Paragraph text.</p>
        </Modal.Body>
      </Modal>
    );
  }
}

export default LoginModal;

// <Modal
//   show={this.props.loginModal.show}
//   onHide={() => {this.props.dispatch(showLoginModal(false))}}
//   style={styles.modal}
//   backdropStyle={styles.modalBackdrop}>
//     <Modal.Body style={styles.modalTextContainer}>
//       <form
//         ref={ref => (this.form = ref)}
//         onSubmit={e => this.handleSubmit(loginDest, e)}
//       >
//         <div>
//           <label>Username:</label>
//           <input type="text" name="slug" />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" name="password" />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </Modal.Body>
// </Modal>
