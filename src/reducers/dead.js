// const loginModalReducer = {
//   // state will be passed in as initial state if calling reducer for first time
//   state: Map({
//     show: false,
//   }),
//   reducer(state, action) {
//     switch (action.type) {
//       case 'TOGGLE_MODAL':
//         // replace loginModal state with payload in TOGGLE_MODAL action
//         return Map(action.payload);
//       default:
//         return state;
//     }
//   },
// };
//
// export default loginModalReducer;

// initial state specified in addReducer call in app.js
// shape of state: { show: valuehere }

//-----------
// config.addReducer('loginModal', loginModalStateAndReducer);

// import { Map } from 'immutable';
//
// // same as loginModalReducer in other file, but this time in the shape specified
// // here: https://reactql.org/docs/state/reducers. It didn't work and gave this
// // error‘Uncaught Error: Can't add reducer for 'loginModal' - reducer must be a function’
// // attempt documented here: https://paper.dropbox.com/doc/travailsvictory-log-in-dev-stuff-urw9F3oeUadSzjULXWYiM#:uid=001425875467962943069186&h2=2017-11-13
// const loginModalStateAndReducer = {
//   state: { show: false },
//   reducer(state, action) {
//     console.log(`action.type: ${action.type}`);
//     console.log(`action.payload: ${action.payload}`);
//     switch (action.type) {
//       case 'TOGGLE_MODAL':
//         // replace loginModal state with payload in TOGGLE_MODAL
//         return action.payload; // TODO: verify that not using a more immutable struct here is ok
//       case 'SHOW_MODAL_STATE':
//         console.log(state);
//         break;
//       default:
//         return state;
//     }
//   },
// };
//
// export default loginModalStateAndReducer;
//----------
