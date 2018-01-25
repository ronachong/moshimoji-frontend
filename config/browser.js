// ----------------------
// IMPORTS
// Config API for adding reducers and configuring ReactQL app
import config from 'kit/config';

// ----------------------
// BROWSER CONFIGURATION

// Set browser config, by checking `SERVER`

if (!SERVER) {
  /* APOLLO */
  config.addApolloMiddleware((req, next) => {
  // TODO: figure out if I should sync server or graphql store with localstorage
  // for session-like purposes
    if (!req.options.headers) {
      req.options.headers = {};
    }

    const token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : null;

    req.options.headers.authorization = `JWT ${token}`;

    next();
  });
}
