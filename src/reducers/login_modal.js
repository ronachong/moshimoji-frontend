import { Map } from 'immutable';

export default function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      // replace loginModal state with payload in TOGGLE_MODAL action
      return action.payload; // TODO: verify that not using a more immutable struct here is ok
    default:
      return state;
  }
}
