import { Map } from 'immutable';

export default function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_MODAL_DISPLAY':
      // replace loginModal state with payload in UPDATE_MODAL_DISPLAY action
      return action.payload; // TODO: verify that not using a more immutable struct here is ok
    case 'SHOW_MODAL_STATE':
      console.log(state);
      break;
    default:
      return state;
  }
}
