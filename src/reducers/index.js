// ----------------------
// IMPORTS
// Config API for adding reducers and configuring ReactQL app
import config from 'kit/config';

/* REDUCERS */
import counterReducer from 'src/reducers/counter';
import loginModalReducer from 'src/reducers/login_modal';

// ----------------------
// ADDS
// Add our custom `counter` reducer, with the initial state as a zero count.
// Note:  The initial state (3rd param) will automatically be wrapped in
// `seamless-immutable` by the kit's Redux init code, so plain objects are
// automatically immutable by default
config.addReducer('counter', counterReducer, { count: 0 });
config.addReducer('loginModal', loginModalReducer, { show: false });
