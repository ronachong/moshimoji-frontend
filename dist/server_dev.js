/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Simple class to act as a singleton for app-wide configuration.

// We'll start with a common config that can be extended separately by the
// server/client, to provide environment-specific functionality
let Common = class Common {
  constructor() {
    // Store reducers in a `Map`, for easy key retrieval
    this.reducers = new Map();

    // Apollo (middle|after)ware
    this.apolloMiddleware = [];
    this.apolloAfterware = [];
    this.apolloNetworkOptions = {};
    this.apolloClientOptions = {};

    // GraphQL endpoint.  This needs setting via either `config.enableGraphQLServer()`
    // or `config.setGraphQLEndpoint()`
    this.graphQLEndpoint = null;

    // Set to true if we're using an internal GraphQL server
    this.graphQLServer = false;

    // Endpoint to retrieve jwt token. This needs setting via config.setJwtEndpoint()`
    this.jwtEndpoint = null;
  }

  /* REDUX */

  // Adds a new reducer.  Accepts a `key` string, a `reducer` function, and a
  // (by default empty) `initialState` object, which will ultimately become immutable
  addReducer(key, reducer, initialState = {}) {
    if (typeof reducer !== 'function') {
      throw new Error(`Can't add reducer for '${key}' - reducer must be a function`);
    }
    this.reducers.set(key, {
      reducer,
      initialState
    });
  }

  /* GRAPHQL */

  // Enables internal GraphQL server.  Default GraphQL and GraphiQL endpoints
  // can be overridden
  enableGraphQLServer(endpoint = '/graphql', graphiQL = true) {
    this.graphQLServer = true;
    this.graphQLEndpoint = endpoint;
    this.graphiQL = graphiQL;
  }

  // Set an external GraphQL URI for use with Apollo
  setGraphQLEndpoint(uri, graphiQL = true) {
    this.graphQLEndpoint = uri;
    this.graphiQL = graphiQL;
  }

  // Set a URI to retrieve jwt tokens for auth
  setJwtEndpoint(uri) {
    this.jwtEndpoint = uri;
  }

  // Register Apollo middleware function
  addApolloMiddleware(middlewareFunc) {
    this.apolloMiddleware.push(middlewareFunc);
  }

  // Register Apollo afterware function
  addApolloAfterware(afterwareFunc) {
    this.apolloAfterware.push(afterwareFunc);
  }

  // Apollo Client options.  These will be merged in with the `createClient`
  // default options defined in `kit/lib/apollo.js`
  setApolloClientOptions(opt = {}) {
    this.apolloClientOptions = opt;
  }

  // Apollo Network options.  These will be merged in with the `createNetworkInterface`
  // default options defined in `kit/lib/apollo.js`
  setApolloNetworkOptions(opt = {}) {
    this.apolloNetworkOptions = opt;
  }
};

// Placeholder for the class we'll attach

let Config;

// Server Config extensions.  This is wrapped in a `SERVER` block to avoid
// adding unnecessary functionality to the client bundle.  Every byte counts!
if (true) {
  Config = class ServerConfig extends Common {
    constructor() {
      super();
      // Create a set for routes -- to retrieve based on insertion order
      this.routes = new Set();

      // Koa application function. But default, this is null
      this.koaAppFunc = null;

      // Flag for setting whether plain HTTP should be disabled
      this.enableHTTP = true;

      // Force SSL. Rewrites all non-SSL queries to SSL.  False, by default.
      this.enableForceSSL = false;

      // Options for enabling SSL. By default, this is null. If SSL is enabled
      // in userland, this would instead hold an object of options
      this.sslOptions = null;

      // Custom middleware -- again, based on insertion order
      this.middleware = new Set();

      // GraphQL schema (if we're using an internal server)
      this.graphQLSchema = null;

      // Attach a GraphiQL IDE endpoint to our server?  By default - no.  If
      // this === true, this will default to `/graphql`.  If it's a string, it'll
      // default to the string value
      this.graphiQL = false;

      // Enable body parsing by default.  Leave `koa-bodyparser` opts as default
      this.enableBodyParser = true;
      this.bodyParserOptions = {};

      // CORS options for `koa-cors`
      this.corsOptions = {};
    }

    /* WEB SERVER / SSR */

    // Get access to Koa's `app` instance, for adding custom instantiation
    // or doing something that's not covered by other functions
    getKoaApp(func) {
      this.koaAppFunc = func;
    }

    // Enable SSL. Normally, you'd use an upstream proxy like Nginx to handle
    // SSL. But if you want to run a 'bare' Koa HTTPS web server, you can pass
    // in the certificate details here and it'll respond to SSL requests
    enableSSL(opt) {
      // At a minimum, we should have `key` and `cert` -- check for those
      if (typeof opt !== 'object' || !opt.key || !opt.cert) {
        throw new Error('Cannot enable SSL. Missing `key` and/or `cert`');
      }
      this.sslOptions = opt;
    }

    // Force SSL. Rewrites all non-SSL queries to SSL. Any options here are
    // passed to `koa-sslify`, the SSL enforcement middleware
    forceSSL(opt = {}) {
      this.enableForceSSL = opt;
    }

    // Disable plain HTTP.  Note this should only be used if you've also set
    // `enableSSL()` and you don't want dual-HTTP+SSL config
    disableHTTP() {
      this.enableHTTP = false;
    }

    // Disable the optional `koa-bodyparser`, to prevent POST data being sent to
    // each request.  By default, body parsing is enabled.
    disableBodyParser() {
      this.enableBodyParser = false;
    }

    setBodyParserOptions(opt = {}) {
      this.bodyParserOptions = opt;
    }

    // 404 handler for the server.  By default, `kit/entry/server.js` will
    // simply return a 404 status code without modifying the HTML render.  By
    // setting a handler here, this will be returned instead
    set404Handler(func) {
      if (typeof func !== 'function') {
        throw new Error('404 handler must be a function');
      }
      this.handler404 = func;
    }

    // Error handler.  If this isn't defined, the server will simply return a
    // 'There was an error. Please try again later.' message, and log the output
    // to the console.  Override that behaviour by passing a (e, ctx, next) -> {} func
    setErrorHandler(func) {
      if (typeof func !== 'function') {
        throw new Error('Error handler must be a function');
      }
      this.errorHandler = func;
    }

    // Add custom middleware.  This should be an async func, for use with Koa
    addMiddleware(middlewareFunc) {
      this.middleware.add(middlewareFunc);
    }

    // Adds a custom server route to attach to our Koa router
    addRoute(method, route, ...handlers) {
      this.routes.add({
        method,
        route,
        handlers
      });
    }

    // Adds custom GET route
    addGetRoute(route, ...handlers) {
      this.addRoute('get', route, ...handlers);
    }

    // Adds custom POST route
    addPostRoute(route, ...handlers) {
      this.addRoute('post', route, ...handlers);
    }

    // Adds custom PUT route
    addPutRoute(route, ...handlers) {
      this.addRoute('put', route, ...handlers);
    }

    // Adds custom PATCH route
    addPatchRoute(route, ...handlers) {
      this.addRoute('patch', route, ...handlers);
    }

    // Adds custom DELETE route
    addDeleteRoute(route, ...handlers) {
      this.addRoute('delete', route, ...handlers);
    }

    // Set the GraphQL schema. This should only be called on the server, otherwise
    // the bundle size passed by the `schema` object will be unnecessarily inflated
    setGraphQLSchema(schema) {
      this.graphQLSchema = schema;
    }

    // CORS options, for `koa-cors` instantiation
    setCORSOptions(opt = {}) {
      this.corsOptions = opt;
    }
  };
} else {
  // For the client config, we'll extend `Common` by default -- but if we need
  // anything unique to the browser in the future, we'd add it here...
  Config = class ClientConfig extends Common {};
}

// Since there's only one `Config` instance globally, we'll create the new
// instance here and export it.  This will then provide any subsequent imports
// with the same object, so we can add settings to a common config
exports.default = new Config();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServerURL = getServerURL;
/* eslint-disable import/prefer-default-export */

// Environment-aware functions

// Get the protocol://host:port of where the current server would bind
function getServerURL(host = "localhost", port = "8081", allowSSL = true) {
  // Check for SSL
  if (allowSSL && null) {
    const stub = `https://${host || "localhost"}`;

    // If we're on port 443, that's 'regular' SSL so no need to specify port
    if (null === '443') return stub;
    return `${stub}:${null}`;
  }

  // Plain HTTP
  const stub = `http://${host || "localhost"}`;

  // If we're on port 80, that's 'regular' HTTP so no need to specify port
  if (port === '80') return stub;
  return `${stub}:${port}`;
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Redirect = exports.NotFound = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// <Status code="xxx"> component.  Updates the context router's context, which
// can be used by the server handler to respond to the status on the server.
let Status = class Status extends _react2.default.PureComponent {

  render() {
    const { code, children } = this.props;
    return _react2.default.createElement(_reactRouterDom.Route, { render: ({ staticContext }) => {
        if (staticContext) {
          staticContext.status = code;
        }
        return children;
      } });
  }
};

// <NotFound> component.  If this renders on the server in development mode,
// it will attempt to proxyify the request to the upstream `webpack-dev-server`.
// In production, it will issue a hard 404 and render.  In the browser, it will
// simply render.
/* eslint-disable no-param-reassign */

// ----------------------
// IMPORTS

Status.propTypes = {
  code: _propTypes2.default.number.isRequired,
  children: _propTypes2.default.node
};
Status.defaultProps = {
  children: null
};
let NotFound = exports.NotFound = class NotFound extends _react2.default.PureComponent {

  render() {
    const { children } = this.props;

    return _react2.default.createElement(
      Status,
      { code: 404 },
      children
    );
  }
};

// <Redirect> component. Mirrors React Router's component by the same name,
// except it sets a 301/302 status code for setting server-side HTTP headers.

NotFound.propTypes = {
  children: _propTypes2.default.node
};
NotFound.defaultProps = {
  children: null
};
let Redirect = exports.Redirect = class Redirect extends _react2.default.PureComponent {

  render() {
    const { to, from, push, permanent } = this.props;
    const code = permanent ? 301 : 302;
    return _react2.default.createElement(
      Status,
      { code: code },
      _react2.default.createElement(_reactRouterDom.Redirect, { to: to, from: from, push: push })
    );
  }
};
Redirect.propTypes = {
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  from: _propTypes2.default.string,
  push: _propTypes2.default.bool,
  permanent: _propTypes2.default.bool
};
Redirect.defaultProps = {
  from: null,
  push: false,
  permanent: false
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleLoginModal = toggleLoginModal;
function toggleLoginModal(bool) {
  console.log('toggleLoginModal being called');
  return {
    type: 'TOGGLE_MODAL',
    payload: {
      show: bool
    }
  };
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Dashboard = () => _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'h2',
    null,
    'Dashboard'
  ),
  _react2.default.createElement(ApolloUserStatusForm, null),
  _react2.default.createElement(ApolloUserStatusesContainer, null)
);

const userStatusFormMutation = _reactApollo.gql`
mutation UserStatusForm($text: String!) {
  createUserStatus(text: $text) {
    reqStatus,
    formErrors,
    userStatus {
      id
    }
  }
}
`;

const userStatusFormQuery = _reactApollo.gql`
{
  currentUser {
    id
  }
}
`;

const UserStatusForm = ({ data, mutate }) => {
  if (data.loading) {
    return _react2.default.createElement(
      'div',
      null,
      'Loading...'
    );
  }

  console.assert(data.currentUser, 'User status form accessed while user not logged in');

  let form = null;
  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    const status = new FormData(form);
    mutate({ variables: { text: status.get('text') } }).then(res => {
      if (res.status === 200) {
        console.log('status submitted successfully');
      }
    }).catch(err => {
      console.log(`Network error: ${err}`);
    });
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      'Update your status'
    ),
    _react2.default.createElement(
      'form',
      {
        ref: ref => {
          form = ref;
        },
        onSubmit: e => handleSubmit(e) },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('textarea', { name: 'text' })
      ),
      _react2.default.createElement(
        'button',
        { type: 'submit' },
        'Submit'
      )
    )
  );
};

let ApolloUserStatusForm = (0, _reactApollo.graphql)(userStatusFormQuery)(UserStatusForm);
ApolloUserStatusForm = (0, _reactApollo.graphql)(userStatusFormMutation)(ApolloUserStatusForm);

const query = _reactApollo.gql`
{
  allUserStatuses {
    edges {
      node {
        id,
        creationDate,
        text
      }
    }
  }
}
`;

// I can create stateless functional components which receive data from apollo,
// if I use the graphql(query)(component) pattern (instead of class decorator).
const UserStatusesContainer = ({ data }) => {
  console.log(data);

  if (data.loading) {
    console.log(data);
    return _react2.default.createElement(
      'div',
      null,
      'Loading...'
    );
  }

  const presentation = !data.allUserStatuses ? _react2.default.createElement(
    'p',
    null,
    'Error retrieving data'
  ) : _react2.default.createElement(UserStatusesPresentation, { user_status_edges: data.allUserStatuses.edges });

  if (!data.allUserStatuses) {
    return _react2.default.createElement(
      'p',
      null,
      'Error retrieving data'
    );
  }

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      'User Statuses'
    ),
    presentation
  );
};

// TODO: create a function to generate gql from proptypes or vice versa, or
// from a common object (would I need to refer to schema for field types?),
// if that will save me time
UserStatusesContainer.propTypes = {
  data: _propTypes2.default.shape({
    allUserStatuses: _propTypes2.default.shape({
      edges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        node: _propTypes2.default.shape({
          id: _propTypes2.default.string.isRequired,
          creationDate: _propTypes2.default.string.isRequired,
          text: _propTypes2.default.string.isRequired
        }).isRequired
      }).isRequired).isRequired
    }).isRequired
  }).isRequired
};

UserStatusesContainer.defaultProps = {
  data: {
    allUserStatuses: {
      edges: [{
        node: {
          id: 0,
          creationDate: 'date str',
          text: 'default text'
        }
      }]
    }
  }
};

const ApolloUserStatusesContainer = (0, _reactApollo.graphql)(query)(UserStatusesContainer);

const UserStatusesPresentation = ({ user_status_edges }) => {
  return _react2.default.createElement(
    'div',
    null,
    user_status_edges.map(user_status => _react2.default.createElement(
      'p',
      { key: user_status.node.id },
      '\'',
      user_status.node.text,
      '\' created ',
      user_status.node.creationDate
    ))
  );
};

UserStatusesPresentation.propTypes = {
  user_status_edges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    node: _propTypes2.default.shape({
      id: _propTypes2.default.string.isRequired,
      creationDate: _propTypes2.default.string.isRequired,
      text: _propTypes2.default.string.isRequired
    }).isRequired
  }).isRequired).isRequired
};

exports.default = Dashboard;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chalk = __webpack_require__(6);

var _chalk2 = _interopRequireDefault(_chalk);

var _console = __webpack_require__(14);

var _server = __webpack_require__(17);

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Get manifest values


/* Local */

// Import console messages
const css = '/assets/css/style.css';

// Extend the server base
/* eslint-disable no-console */

// Production server entry point.  Spawns the server on default HOST:PORT

// ----------------------
// IMPORTS

/* NPM */

// Chalk terminal library

const scripts = ['vendor.js', 'browser.js'].map(key => `/${key}`);

// Spawn the development server.
// Runs inside an immediate `async` block, to await listening on ports
(async () => {
  const { app, router, listen } = _server2.default;

  // Create proxy to tunnel requests to the browser `webpack-dev-server`
  router.get('/*', (0, _server.createReactHandler)(css, scripts));

  // Connect the development routes to the server
  app.use((0, _server.staticMiddleware)()).use(router.routes()).use(router.allowedMethods());

  // Spawn the server
  listen();

  // Log to the terminal that we're ready for action
  (0, _console.logServerStarted)({
    type: 'server-side rendering',
    chalk: _chalk2.default.bgYellow.black
  });
})();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logServerStarted = logServerStarted;

var _boxen = __webpack_require__(15);

var _boxen2 = _interopRequireDefault(_boxen);

var _chalk = __webpack_require__(6);

var _chalk2 = _interopRequireDefault(_chalk);

var _ip = __webpack_require__(16);

var _ip2 = _interopRequireDefault(_ip);

var _env = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// IP library, for determining the local network interface
/* eslint-disable import/prefer-default-export, no-console */

// ----------------------
// IMPORTS

/* NPM */

// Display a border around a message
function logServerStarted(opt = {}) {
  let message = _chalk2.default.green(`Running ${(opt.chalk || _chalk2.default.bold)(opt.type)} in ${_chalk2.default.bold("development")} mode\n\n`);
  message += `- ${_chalk2.default.bold('Local:           ')} ${(0, _env.getServerURL)(opt.host, opt.port, opt.allowSSL)}`;

  try {
    const url = (0, _env.getServerURL)(_ip2.default.address(), opt.port, opt.allowSSL);
    message += `\n- ${_chalk2.default.bold('On Your Network: ')} ${url}`;
  } catch (err) {/* ignore errors */}

  console.log((0, _boxen2.default)(message, {
    padding: 1,
    borderColor: 'green',
    margin: 1
  }));
}

/* ReactQL */


// Chalk library, to add colour to our console logs

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("boxen");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("ip");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staticMiddleware = staticMiddleware;
exports.createReactHandler = createReactHandler;

var _stream = __webpack_require__(18);

var _http = __webpack_require__(19);

var _http2 = _interopRequireDefault(_http);

var _https = __webpack_require__(20);

var _https2 = _interopRequireDefault(_https);

__webpack_require__(21);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(22);

var _server2 = _interopRequireDefault(_server);

var _koa = __webpack_require__(23);

var _koa2 = _interopRequireDefault(_koa);

var _reactApollo = __webpack_require__(3);

var _koaSslify = __webpack_require__(24);

var _koaSslify2 = _interopRequireDefault(_koaSslify);

var _kcors = __webpack_require__(25);

var _kcors2 = _interopRequireDefault(_kcors);

var _koaSend = __webpack_require__(26);

var _koaSend2 = _interopRequireDefault(_koaSend);

var _koaHelmet = __webpack_require__(27);

var _koaHelmet2 = _interopRequireDefault(_koaHelmet);

var _koaRouter = __webpack_require__(28);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _microseconds = __webpack_require__(29);

var _microseconds2 = _interopRequireDefault(_microseconds);

var _reactRouter = __webpack_require__(30);

var _reactHelmet = __webpack_require__(8);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _apolloServerKoa = __webpack_require__(31);

var _apolloLocalQuery = __webpack_require__(32);

var _apolloLocalQuery2 = _interopRequireDefault(_apolloLocalQuery);

var _graphql = __webpack_require__(33);

var graphql = _interopRequireWildcard(_graphql);

var _app = __webpack_require__(34);

var _app2 = _interopRequireDefault(_app);

var _redux = __webpack_require__(67);

var _redux2 = _interopRequireDefault(_redux);

var _ssr = __webpack_require__(71);

var _ssr2 = _interopRequireDefault(_ssr);

var _apollo = __webpack_require__(72);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _paths = __webpack_require__(73);

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Create a network layer based on settings.  This is an immediate function
// that binds either the `localInterface` function (if there's a built-in
// GraphQL) or `externalInterface` (if we're pointing outside of ReactQL)


// App settings, which we'll use to customise the server -- must be loaded
// *after* app.js has been called, so the correct settings have been set


// Initial view to send back HTML render


/* ReactQL */

// App entry point.  This must come first, because app.js will set-up the
// server config that we'll use later


// Allow local GraphQL schema querying when using a built-in GraphQL server


// <Helmet> component for retrieving <head> section, so we can set page
// title, meta info, etc along with the initial HTML


// High-precision timing, so we can debug response time to serve a request


// HTTP header hardening


// Enable cross-origin requests


// Apollo tools to connect to a GraphQL server.  We'll grab the
// `ApolloProvider` HOC component, which will inject any 'listening' React
// components with GraphQL data props.  We'll also use `getDataFromTree`
// to await data being ready before rendering back HTML to the client


// React utility to transform JSX to HTML (to send back to the client)


/* NPM */

// Patch global.`fetch` so that Apollo calls to GraphQL work


// HTTP & SSL servers.  We can use `config.enableSSL|disableHTTP()` to enable
// HTTPS and disable plain HTTP respectively, so we'll use Node's core libs
// for building both server types.
const createNeworkInterface = (() => {
  // For a local interface, we want to allow passing in the request's
  // context object, which can then feed through to our GraphQL queries to
  // extract pertinent information and manipulate the response
  function localInterface(context) {
    return _apolloLocalQuery2.default.createLocalInterface(graphql, _config2.default.graphQLSchema, {
      // Attach the request's context, which certain GraphQL queries might
      // need for accessing cookies, auth headers, etc.
      context
    });
  }

  function externalInterface() {
    return (0, _apollo.getNetworkInterface)(_config2.default.graphQLEndpoint);
  }

  return _config2.default.graphQLServer ? localInterface : externalInterface;
})();

// Static file middleware


// Import paths.  We'll use this to figure out where our public folder is
// so we can serve static files


// Grab the shared Apollo Client / network interface instantiation


// Custom redux store creator.  This will allow us to create a store 'outside'
// of Apollo, so we can apply our own reducers and make use of the Redux dev
// tools in the browser


// Import all of the GraphQL lib, for use with our Apollo client connection


// Import the Apollo GraphQL server, for Koa


// React Router HOC for figuring out the exact React hierarchy to display
// based on the URL


// Koa Router, for handling URL requests


// Static file handler


// Enforce SSL, if required


// Koa 2 web server.  Handles incoming HTTP requests, and will serve back
// the React render, or any of the static assets being compiled


// React UI
/* eslint-disable no-param-reassign, no-console */

// Server entry point, for Webpack.  This will spawn a Koa web server
// and listen for HTTP requests.  Clients will get a return render of React
// or the file they have requested
//
// Note:  No HTTP optimisation is performed here (gzip, http/2, etc).  Node.js
// will nearly always be slower than Nginx or an equivalent, dedicated proxy,
// so it's usually better to leave that stuff to a faster upstream provider

// ----------------------
// IMPORTS

/* Node */

// For pre-pending a `<!DOCTYPE html>` stream to the server response
function staticMiddleware() {
  return async function staticMiddlewareHandler(ctx, next) {
    try {
      if (ctx.path !== '/') {
        return await (0, _koaSend2.default)(ctx, ctx.path,  false ? {
          root: _paths2.default.public,
          immutable: true
        } : {
          root: _paths2.default.distDev
        });
      }
    } catch (e) {/* Errors will fall through */}
    return next();
  };
}

// Function to create a React handler, per the environment's correct
// manifest files
function createReactHandler(css = [], scripts = [], chunkManifest = {}) {
  return async function reactHandler(ctx) {
    const routeContext = {};

    // Generate the HTML from our React tree.  We're wrapping the result
    // in `react-router`'s <StaticRouter> which will pull out URL info and
    // store it in our empty `route` object
    const components = _react2.default.createElement(
      _reactRouter.StaticRouter,
      { location: ctx.request.url, context: routeContext },
      _react2.default.createElement(
        _reactApollo.ApolloProvider,
        { store: ctx.store, client: ctx.apollo },
        _react2.default.createElement(_app2.default, null)
      )
    );

    // Wait for GraphQL data to be available in our initial render,
    // before dumping HTML back to the client
    await (0, _reactApollo.getDataFromTree)(components);

    // Handle redirects
    if ([301, 302].includes(routeContext.status)) {
      // 301 = permanent redirect, 302 = temporary
      ctx.status = routeContext.status;

      // Issue the new `Location:` header
      ctx.redirect(routeContext.url);

      // Return early -- no need to set a response body
      return;
    }

    // Handle 404 Not Found
    if (routeContext.status === 404) {
      // By default, just set the status code to 404.  Or, we can use
      // `config.set404Handler()` to pass in a custom handler func that takes
      // the `ctx` and store

      if (_config2.default.handler404) {
        _config2.default.handler404(ctx);

        // Return early -- no need to set a response body, because that should
        // be taken care of by the custom 404 handler
        return;
      }

      ctx.status = routeContext.status;
    }

    // Create a HTML stream, to send back to the browser
    const htmlStream = new _stream.PassThrough();

    // Prefix the doctype, so the browser knows to expect HTML5
    htmlStream.write('<!DOCTYPE html>');

    // Create a stream of the React render. We'll pass in the
    // Helmet component to generate the <head> tag, as well as our Redux
    // store state so that the browser can continue from the server
    const reactStream = _server2.default.renderToNodeStream(_react2.default.createElement(
      _ssr2.default,
      {
        head: _reactHelmet2.default.rewind(),
        window: {
          webpackManifest: chunkManifest,
          __STATE__: ctx.store.getState()
        },
        css: css,
        scripts: scripts },
      components
    ));

    // Pipe the React stream to the HTML output
    reactStream.pipe(htmlStream);

    // Set the return type to `text/html`, and stream the response back to
    // the client
    ctx.type = 'text/html';
    ctx.body = htmlStream;
  };
}

// Build the router, based on our app's settings.  This will define which
// Koa route handlers
const router = new _koaRouter2.default().
// Set-up a general purpose /ping route to check the server is alive
get('/ping', async ctx => {
  ctx.body = 'pong';
})

// Favicon.ico.  By default, we'll serve this as a 204 No Content.
// If /favicon.ico is available as a static file, it'll try that first
.get('/favicon.ico', async ctx => {
  ctx.res.statusCode = 204;
});

// Build the app instance, which we'll use to define middleware for Koa
// as a precursor to handling routes
const app = new _koa2.default()
// Adds CORS config
.use((0, _kcors2.default)(_config2.default.corsOptions))

// Preliminary security for HTTP headers
.use((0, _koaHelmet2.default)())

// Error wrapper.  If an error manages to slip through the middleware
// chain, it will be caught and logged back here
.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    // If we have a custom error handler, use that - else simply log a
    // message and return one to the user
    if (typeof _config2.default.errorHandler === 'function') {
      _config2.default.errorHandler(e, ctx, next);
    } else {
      console.log('Error:', e.message);
      ctx.body = 'There was an error. Please try again later.';
    }
  }
})

// It's useful to see how long a request takes to respond.  Add the
// timing to a HTTP Response header
.use(async (ctx, next) => {
  const start = _microseconds2.default.now();
  await next();
  const end = _microseconds2.default.parse(_microseconds2.default.since(start));
  const total = end.microseconds + end.milliseconds * 1e3 + end.seconds * 1e6;
  ctx.set('Response-Time', `${total / 1e3}ms`);
})

// Create a new Apollo client and Redux store per request.  This will be
// stored on the `ctx` object, making it available for the React handler or
// any subsequent route/middleware
.use(async (ctx, next) => {
  // Create a new server Apollo client for this request
  ctx.apollo = (0, _apollo.createClient)({
    ssrMode: true,
    // Create a network request.  If we're running an internal server, this
    // will be a function that accepts the request's context, to feed through
    // to the GraphQL schema
    networkInterface: createNeworkInterface(ctx)
  });

  // Create a new Redux store for this request
  ctx.store = (0, _redux2.default)(ctx.apollo);

  // Pass to the next middleware in the chain: React, custom middleware, etc
  return next();
});

/* FORCE SSL */

// Middleware to re-write HTTP requests to SSL, if required.
if (_config2.default.enableForceSSL) {
  app.use((0, _koaSslify2.default)(_config2.default.enableForceSSL));
}

// Attach custom middleware
_config2.default.middleware.forEach(middlewareFunc => app.use(middlewareFunc));

// Attach an internal GraphQL server, if we need one
if (_config2.default.graphQLServer) {
  // Attach the GraphQL schema to the server, and hook it up to the endpoint
  // to listen to POST requests
  router.post(_config2.default.graphQLEndpoint, (0, _apolloServerKoa.graphqlKoa)(context => ({
    // Bind the current request context, so it's accessible within GraphQL
    context,
    // Attach the GraphQL schema
    schema: _config2.default.graphQLSchema
  })));
}

// Do we need the GraphiQL query interface?  This can be used if we have an
// internal GraphQL server, or if we're pointing to an external server.  First,
// we check if `config.graphiql` === `true` to see if we need one...

if (_config2.default.graphiQL) {
  // The GraphiQL endpoint default depends on this order of precedence:
  // explicit -> internal GraphQL server endpoint -> /graphql
  let graphiQLEndpoint;

  if (typeof _config2.default.graphiQL === 'string') {
    // Since we've explicitly passed a string, we'll use that as the endpoint
    graphiQLEndpoint = _config2.default.graphiQL;
  } else if (_config2.default.graphQLServer) {
    // If we have an internal GraphQL server, AND we haven't set a string,
    // the default GraphiQL path should be the same as the server endpoint
    graphiQLEndpoint = _config2.default.graphQLEndpoint;
  } else {
    // Since we haven't set anything, AND we don't have an internal server,
    // by default we'll use `/graphql` which will work for an external server
    graphiQLEndpoint = '/graphql';
  }

  router.get(graphiQLEndpoint, (0, _apolloServerKoa.graphiqlKoa)({
    endpointURL: _config2.default.graphQLEndpoint
  }));
}

// Attach any custom routes we may have set in userland
_config2.default.routes.forEach(route => {
  router[route.method](route.route, ...route.handlers);
});

/* BODY PARSING */

// `koa-bodyparser` is used to process POST requests.  Check that it's enabled
// (default) and apply a custom config if we need one
if (_config2.default.enableBodyParser) {
  app.use(__webpack_require__(75)(
  // Pass in any options that may have been set in userland
  _config2.default.bodyParserOptions));
}

/* CUSTOM APP INSTANTIATION */

// Pass the `app` to do anything we need with it in userland. Useful for
// custom instantiation that doesn't fit into the middleware/route functions
if (typeof _config2.default.koaAppFunc === 'function') {
  _config2.default.koaAppFunc(app);
}

// Listener function that will start http(s) server(s) based on userland
// config and available ports
const listen = () => {
  // Spawn the listeners.
  const servers = [];

  // Plain HTTP
  if (_config2.default.enableHTTP) {
    servers.push(_http2.default.createServer(app.callback()).listen("8081"));
  }

  // SSL -- only enable this if we have an `SSL_PORT` set on the environment
  if (false) {
    servers.push(_https2.default.createServer(_config2.default.sslOptions, app.callback()).listen(process.env.SSL_PORT));
  }

  return servers;
};

// Export everything we need to run the server (in dev or prod)
exports.default = {
  router,
  app,
  listen
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("koa-sslify");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("kcors");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("koa-send");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("koa-helmet");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("microseconds");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("apollo-server-koa");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("apollo-local-query");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(35);

var _main2 = _interopRequireDefault(_main);

__webpack_require__(59);

__webpack_require__(63);

__webpack_require__(64);

__webpack_require__(65);

__webpack_require__(66);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------
// export the root component we want to mount as the starting point to our app.
// Aapp's entry point.  Every ReactQL projects requires 'src/app.js',
// which both the server and browser will import.
//
// In this file, two things happen:
//
// 1.  Import styles&configuration code in config/ & reducers/ to configure app.
//
// 2.  Export the root React component that goes between <div id="main"/>
// in the server-side HTML.

// ----------------------
// IMPORTS

/* ReactQL */

/* App */

// Main component -- i.e. the 'root' React component in our app

exports.default = _main2.default;

// Init global styles.  These will be added to the resulting CSS automatically
// without any class hashing.  Use this to include default or framework CSS.


// Init config

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(4);

var _reactHelmet = __webpack_require__(8);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _routing = __webpack_require__(9);

var _graphql = __webpack_require__(36);

var _graphql2 = _interopRequireDefault(_graphql);

var _routes = __webpack_require__(38);

var _LoginModal = __webpack_require__(39);

var _LoginModal2 = _interopRequireDefault(_LoginModal);

var _DashboardLinkOrButton = __webpack_require__(41);

var _DashboardLinkOrButton2 = _interopRequireDefault(_DashboardLinkOrButton);

var _all = __webpack_require__(43);

var _all2 = _interopRequireDefault(_all);

var _redux = __webpack_require__(50);

var _redux2 = _interopRequireDefault(_redux);

var _stats = __webpack_require__(51);

var _stats2 = _interopRequireDefault(_stats);

var _styles = __webpack_require__(53);

var _styles2 = _interopRequireDefault(_styles);

var _main = __webpack_require__(57);

var _main2 = _interopRequireDefault(_main);

var _reactqlLogo = __webpack_require__(58);

var _reactqlLogo2 = _interopRequireDefault(_reactqlLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Styles


/* App */

// Child React components. Note:  We can either export one main React component
// per file, or in the case of <Home>, <Page> and <WhenFound>, we can group
// multiple components per file where it makes sense to do so


// <Helmet> component for setting the page title/meta tags
const query = _reactApollo.gql`
{
  currentUser {
    id
  }
}
`;

// Get the ReactQL logo.  This is a local .svg file, which will be made
// available as a string relative to [root]/dist/assets/img/


/* ReactQL */

// NotFound 404 handler for unknown routes


// Routing via React Router
// Main React component, that we'll import in `src/app.js`
//
// Note a few points from this file:
//
// 1.  We're using the format `main/index.js` for this file, which means we
// can simply import 'src/components/main', which will auto-default to index.js.
// This is a useful pattern when you have styles/images to pull from, and you
// want to keep the component tree organised.
//
// 2.  We import SASS and a logo SVG file directly.  Classnames will be hashed
// automatically, and images will be compressed/optimised in production.  File
// names that are made available in the import variable will be identical on
// both the server and browser.
//
// 3.  We're introducing React Router in this component.  In RR v4, routes are
// not defined globally-- they're defined declaratively on components, so we
// can respond to route changes anywhere.
//
// 4.  We're using `react-helmet`, which allows us to set <head> data like
// a <title> or <meta> tags, which are filtered up to the main <Html> component
// before HTML rendering.

// ----------------------
// IMPORTS

/* NPM */

// React


const IndexContainer = ({ data }) => _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(_reactHelmet2.default, {
    title: 'moshimoji',
    meta: [{
      name: 'description',
      content: 'Community-driven platform to read, share, and publish manga and other comics.'
    }] }),
  _react2.default.createElement(_LoginModal2.default, {
    toggleModal: null }),
  _react2.default.createElement(
    'div',
    { className: _main2.default.hello },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/' },
      _react2.default.createElement(
        'h1',
        null,
        'moshimoji'
      )
    )
  ),
  _react2.default.createElement('hr', null),
  _react2.default.createElement(
    'div',
    { className: _main2.default.hello },
    data.loading || true ?
    // TODO: use presentational component for first button
    // TODO: make sure first button is grayed out when loading or initial react
    _react2.default.createElement(
      'button',
      { onClick: console.log('dashboard button clicked while inactive') },
      'dashboard'
    ) : _react2.default.createElement(_DashboardLinkOrButton2.default, { currentUser: data.currentUser })
  ),
  _react2.default.createElement('hr', null),
  _react2.default.createElement(
    'ul',
    null,
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/reader' },
        'reader'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/database' },
        'database'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/forum' },
        'forum'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/reviews' },
        'reviews'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/doujin' },
        'doujin'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/page/example' },
        'Example page'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/old/path' },
        'Redirect from /old/path \u2192 /new/path'
      )
    )
  ),
  _react2.default.createElement('hr', null),
  _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _all2.default.SiteNews }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard', component: _all2.default.Dashboard }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/reader', component: _all2.default.Reader }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/database', component: _all2.default.Database }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/forum', component: _all2.default.Forum }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/reviews', component: _all2.default.Reviews }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/doujin', component: _all2.default.Doujin }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/page/:name', component: _routes.Page }),
    _react2.default.createElement(_routing.Redirect, { from: '/old/path', to: '/new/path' }),
    _react2.default.createElement(_reactRouterDom.Route, { component: _routes.WhenNotFound })
  ),
  _react2.default.createElement('hr', null),
  _react2.default.createElement(_graphql2.default, null),
  _react2.default.createElement('hr', null),
  _react2.default.createElement(_redux2.default, null),
  _react2.default.createElement('hr', null),
  _react2.default.createElement(
    'p',
    null,
    'Runtime info:'
  ),
  _react2.default.createElement(_stats2.default, null),
  _react2.default.createElement('hr', null),
  _react2.default.createElement(
    'p',
    null,
    'Stylesheet examples:'
  ),
  _react2.default.createElement(_styles2.default, null)
);

const ApolloIndexContainer = (0, _reactApollo.graphql)(query)(IndexContainer);

exports.default = ApolloIndexContainer;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class; // Now, let's create a GraphQL-enabled component...

// ... then, let's create the component and decorate it with the `graphql`
// HOC that will automatically populate `this.props` with the query data
// once the GraphQL API request has been completed

// ----------------------
// IMPORTS

/* NPM */

// GraphQL


/* App */

// GraphQL queries.  Looking at this file demonstrates how to import fragments.
// Webpack will compile this into inline GraphQL for us, so we can pass the
// query to components using the @graphql decorator
//import allMessages from 'src/graphql/queries/all_messages.gql';


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(3);

var _all_user_statuses = __webpack_require__(37);

var _all_user_statuses2 = _interopRequireDefault(_all_user_statuses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Since this component needs to 'listen' to GraphQL data, we wrap it in
// `react-apollo`'s `graphql` HOC/decorator and pass in the query that this
// component requires.   Note: This is not to be confused with the `graphql`
// lib, which is used on the server-side to initially define the schema
let GraphQLMessage = (_dec = (0, _reactApollo.graphql)(_all_user_statuses2.default), _dec(_class = class GraphQLMessage extends _react2.default.PureComponent {
  // TODO: create a function to generate gql from proptypes or vice versa, or
  // from a common object (would I need to refer to schema for field types?),
  // if that will save me time

  render() {
    const { data } = this.props;
    // Since we're dealing with async GraphQL data, we defend against the
    // data not yet being loaded by checking to see that we have the `message`
    // key on our returned object
    //   const message = data.message && data.message.text;
    // TODO: understand how this line^ works

    // Apollo will tell us whether we're still loading.  We can also use this
    // check to ensure we have a fully returned response
    const isLoading = data.loading ? 'yes' : 'nope';
    const message = isLoading == 'nope' ? data.allUserStatuses.edges[0].node.text : 'None';
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Message from GraphQL server: ',
        _react2.default.createElement(
          'em',
          null,
          message
        )
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Currently loading?: ',
        isLoading
      )
    );
  }
}) || _class);
GraphQLMessage.propTypes = {
  data: _propTypes2.default.shape({
    allUserStatuses: _propTypes2.default.shape({
      edges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        node: _propTypes2.default.shape({
          id: _propTypes2.default.number.isRequired,
          text: _propTypes2.default.string.isRequired
        }).isRequired
      }).isRequired).isRequired
    }).isRequired
  }).isRequired
};
GraphQLMessage.defaultProps = {
  data: {
    allUserStatuses: {
      edges: [{
        node: {
          id: 0,
          text: 'default text'
        }
      }]
    }
  }
};
exports.default = GraphQLMessage;

/***/ }),
/* 37 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"allUserStatuses"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"text"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}]}}]}}],"loc":{"start":0,"end":98}};
    doc.loc.source = {"body":"query {\n  allUserStatuses {\n    edges {\n      node {\n        id,\n        text\n      }\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  
module.exports = doc;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WhenNotFound = exports.Page = exports.Home = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _routing = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// We'll display this <Home> component when we're on the / route
const Home = exports.Home = () => _react2.default.createElement(
  'h1',
  null,
  'You\'re on the home page - click another link above'
);

// Helper component that will be conditionally shown when the route matches.
// This gives you an idea how React Router v4 works -- we have a `match`
// prop that gives us information on the route we can use within the component


/* ReactQL */

// NotFound 404 handler for unknown routes
// Demonstrates several components on one page, each with their own `export`.
//
// These are smaller components that <Main> imports, and changes depending
// on the page route (via React Router).
//
// <WhenNotFound> demonstrates the use of <NotFound>, a ReactQL helper
// component that signals to our web server that we have a 404 error, to handle
// accordingly

// ----------------------
// IMPORTS

/* NPM */

// React
const Page = exports.Page = ({ match }) => _react2.default.createElement(
  'h1',
  null,
  'Changed route: ',
  match.params.name
);

// Specify PropTypes if the `match` object, which is injected to props by
// the <Route> component
Page.propTypes = {
  match: _propTypes2.default.shape({
    params: _propTypes2.default.object
  }).isRequired
};

// Create a route that will be displayed when the code isn't found
const WhenNotFound = exports.WhenNotFound = () => _react2.default.createElement(
  _routing.NotFound,
  null,
  _react2.default.createElement(
    'h1',
    null,
    'Unknown route - the 404 handler was triggered!'
  )
);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _class; // ----------------------
// IMPORTS

/* NPM */


// HOC/decorator to listen to Redux store state


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(5);

var _reactBootstrap = __webpack_require__(40);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _actions = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------
// STYLING
const FADE_DURATION = 200;

const styles = {
  modal: {
    position: 'fixed',
    zIndex: 1040,
    top: 0, bottom: 0, left: 0, right: 0
  },
  modalBackdrop: {
    position: 'fixed',
    top: 0, bottom: 0, left: 0, right: 0,
    zIndex: 'auto',
    backgroundColor: '#000',
    opacity: 0.5
  },
  modalTextContainer: {
    position: 'absolute',
    width: '50%',
    height: '50%',
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
let LoginModal = (_dec = (0, _reactRedux.connect)(state => ({ loginModal: state.loginModal })), _dec(_class = class LoginModal extends _react.Component {

  handleSubmit(loginDest, e) {
    e.preventDefault();
    const data = new FormData(this.form);
    fetch(_config2.default.jwtEndpoint, {
      method: 'POST',
      body: data
    }).then(res => {
      res.json().then(resJson => {
        if (resJson.token) {
          localStorage.setItem('token', resJson.token);
          window.location.replace(loginDest);
        }
      });
    }).catch(err => {
      console.log(`Network error: ${err}`);
    });
  }

  render() {
    // TODO: add logic to compute destination dynamically.
    // can be dashboard or home/site news, depending on origin
    // of modal (dashboard button or link preceding)
    const loginDest = '/dashboard';

    return (
      // <Transition
      //   in={true}
      //   timeout={FADE_DURATION}
      //   className='fade'
      //   enteredClassName='in'
      //   enteringClassName='in'>
      _react2.default.createElement(
        _reactBootstrap.Modal,
        {
          show: this.props.loginModal.show,
          onHide: () => {
            this.props.dispatch((0, _actions.toggleLoginModal)(false));
          },
          style: styles.modal,
          backdropStyle: styles.modalBackdrop },
        _react2.default.createElement(
          _reactBootstrap.Modal.Body,
          { style: styles.modalTextContainer },
          _react2.default.createElement(
            'form',
            {
              ref: ref => this.form = ref,
              onSubmit: e => this.handleSubmit(loginDest, e)
            },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'label',
                null,
                'Username:'
              ),
              _react2.default.createElement('input', { type: 'text', name: 'username' })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'label',
                null,
                'Password:'
              ),
              _react2.default.createElement('input', { type: 'password', name: 'password' })
            ),
            _react2.default.createElement(
              'button',
              { type: 'submit' },
              'Login'
            )
          )
        )
      )
      // </Transition>

    );
  }
}) || _class);
LoginModal.propTypes = {
  // counter: PropTypes.shape({
  //   count: PropTypes.number.isRequired,
  // }),
};
LoginModal.defaultProps = {
  // counter: {
  //   count: 0,
  // },
};
exports.default = LoginModal;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _class; // ----------------------
// IMPORTS

/* NPM */


// HOC/decorator to listen to Redux store state


// components


// Redux actions


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _LinkOrButton = __webpack_require__(42);

var _LinkOrButton2 = _interopRequireDefault(_LinkOrButton);

var _actions = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------
// COMPONENT
// TODO: figure out if this can/should be rewritten as a stateless functional
// component, even if it needs the the dispatch prop (don't think I can use an
// es6 class decorator with a functional component, so can't use @connect)
// TODO: consider refactoring this and LinkOrButton;
// does it make sense to store things as class attrs?
// does propsToPass really make sense?
// or can I simply just pass uri, onclick separately?
// should the isLink logic be moved elswhere?
let DashboardLinkOrButton = (_dec = (0, _reactRedux.connect)(), _dec(_class = class DashboardLinkOrButton extends _react2.default.PureComponent {

  constructor(props) {
    super(props);
    // TODO: figure out if this should be setState instead
    if (this.props.currentUser) {
      this.isLink = true;
      this.propsToPass = {
        uri: '/dashboard/site'
      };
    } else {
      this.isLink = false;
      this.propsToPass = {
        onClick: () => {
          console.log('dashboard button was clicked');
          this.props.dispatch((0, _actions.toggleLoginModal)(true));
        }
      };
    }
  }

  render() {
    const DisplayComponent = ({ onClick }) => _react2.default.createElement(
      'button',
      { onClick: onClick },
      'dashboard'
    );

    return _react2.default.createElement(_LinkOrButton2.default, {
      DisplayComponent: DisplayComponent,
      isLink: this.isLink,
      propsToPass: this.propsToPass });
  }
}) || _class);
DashboardLinkOrButton.propTypes = {
  // counter: PropTypes.shape({
  //   count: PropTypes.number.isRequired,
  // }),
};
DashboardLinkOrButton.defaultProps = {
  // counter: {
  //   count: 0,
  // },
};
exports.default = DashboardLinkOrButton;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// <LinkOrButton displayComponent={const} onClick= />
const LinkOrButton = ({ DisplayComponent, isLink, propsToPass }) => {
  if (isLink) {
    const { uri, otherProps } = propsToPass;
    return _react2.default.createElement(
      _reactRouterDom.Link,
      { to: uri },
      _react2.default.createElement(DisplayComponent, { props: otherProps })
    );
  }

  const { onClick, otherProps } = propsToPass;
  console.log('LinkOrButton');
  console.log(onClick);
  console.log(propsToPass);
  return _react2.default.createElement(DisplayComponent, { onClick: onClick, props: otherProps });
};

exports.default = LinkOrButton;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dashboard = __webpack_require__(11);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Database = __webpack_require__(44);

var _Database2 = _interopRequireDefault(_Database);

var _Doujin = __webpack_require__(45);

var _Doujin2 = _interopRequireDefault(_Doujin);

var _Forum = __webpack_require__(46);

var _Forum2 = _interopRequireDefault(_Forum);

var _Reader = __webpack_require__(47);

var _Reader2 = _interopRequireDefault(_Reader);

var _Reviews = __webpack_require__(48);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _SiteNews = __webpack_require__(49);

var _SiteNews2 = _interopRequireDefault(_SiteNews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const modules = {
  Dashboard: _Dashboard2.default,
  Database: _Database2.default,
  Doujin: _Doujin2.default,
  Forum: _Forum2.default,
  Reader: _Reader2.default,
  Reviews: _Reviews2.default,
  SiteNews: _SiteNews2.default
};

exports.default = modules;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Database = () => _react2.default.createElement(
  'h2',
  null,
  'Database module'
);

exports.default = Database;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Doujin = () => _react2.default.createElement(
  'h2',
  null,
  'Doujin module'
);

exports.default = Doujin;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Dashboard = __webpack_require__(11);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Forum = () => _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'h2',
    null,
    'Forum module'
  ),
  _react2.default.createElement(_Dashboard2.default, null)
);

exports.default = Forum;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Reader = () => _react2.default.createElement(
  'h2',
  null,
  'Reader module'
);

exports.default = Reader;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Reviews = () => _react2.default.createElement(
  'h2',
  null,
  'Reviews module'
);

exports.default = Reviews;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SiteNews = () => _react2.default.createElement(
  'h2',
  null,
  'Site news module'
);

exports.default = SiteNews;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class; // Component that demonstrates using a part of the Redux store
// outside of Apollo.  We can use config.addReducer(key, reducer) in `src/app.js`
// to add custom Redux reducers

// ----------------------
// IMPORTS

/* NPM */


// HOC/decorator to listen to Redux store state


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// @connect accepts a function that takes the full Redux state, and then
// returns the portion of state that our component cares about.  In this example,
// we're listening to `state.counter`, which we can show inside the component
let ReduxCounter = (_dec = (0, _reactRedux.connect)(state => ({ counter: state.counter })), _dec(_class = class ReduxCounter extends _react2.default.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.triggerIncrement = () => {
      this.props.dispatch({
        type: 'INCREMENT_COUNTER'
      });
    }, _temp;
  }

  // Trigger the `INCREMENT_COUNTER` action in Redux, to add 1 to the total.
  // Note: by using the `= () {}` format, we're implicitly binding the component
  // to `this`, which is why we can use @connect's `.dispatch()` function that's
  // passed in as a prop


  render() {
    const { count } = this.props.counter;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Listening to Redux counter: ',
        count
      ),
      _react2.default.createElement(
        'button',
        { onClick: this.triggerIncrement },
        'Increment'
      )
    );
  }
}) || _class);
ReduxCounter.propTypes = {
  counter: _propTypes2.default.shape({
    count: _propTypes2.default.number.isRequired
  })
};
ReduxCounter.defaultProps = {
  counter: {
    count: 0
  } };
exports.default = ReduxCounter;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _stats = __webpack_require__(52);

var _stats2 = _interopRequireDefault(_stats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Simple <Stats> component that displays our current environment.

// ----------------------
// IMPORTS

/* NPM */

// React
exports.default = () => {
  // We can pull the environment from `process.env.NODE_ENV`, which is set
  // to either 'development' | 'production' on both the server and in the browser
  const info = [['Environment', "development"]];

  return _react2.default.createElement(
    'ul',
    { className: _stats2.default.data },
    info.map(([key, val]) => _react2.default.createElement(
      'li',
      { key: key },
      key,
      ': ',
      _react2.default.createElement(
        'span',
        null,
        val
      )
    ))
  );
};

/* App */

// Styles

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = {
	"data": "data-1TlbpCj5FlrOdqUTJqH60F"
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(54);

var _styles2 = _interopRequireDefault(_styles);

var _styles3 = __webpack_require__(55);

var _styles4 = _interopRequireDefault(_styles3);

var _styles5 = __webpack_require__(56);

var _styles6 = _interopRequireDefault(_styles5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Example of CSS, SASS and LESS styles being used together

// ----------------------
// IMPORTS

/* NPM */
exports.default = () => _react2.default.createElement(
  'ul',
  { className: _styles2.default.styleExamples },
  _react2.default.createElement(
    'li',
    { className: _styles2.default.example },
    'Styled by CSS'
  ),
  _react2.default.createElement(
    'li',
    { className: _styles4.default.example },
    'Styled by SASS'
  ),
  _react2.default.createElement(
    'li',
    { className: _styles6.default.example },
    'Styled by LESS'
  )
);

/* App */

// Styles

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = {
	"styleExamples": "styleExamples-1odAJW6hJJkT1H4az7KebJ",
	"example": "example-HDBhpRi1XOtosKy5rqCSL"
};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = {
	"example": "example-3x1WZ3q5Zomb6qbpAqayqQ"
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = {
	"example": "example-Qwu6EO0LZh1IVEfs-9zO_"
};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = {
	"hello": "hello-3yYdKbSCZaFVyGKKMfKulk",
	"logo": "logo-pd8BfVR8JEOTwAIiOe-h2"
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/reactql-logo.7b90d212d7c2537aeffb13ed959c5491.svg";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _counter = __webpack_require__(60);

var _counter2 = _interopRequireDefault(_counter);

var _login_modal = __webpack_require__(61);

var _login_modal2 = _interopRequireDefault(_login_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------
// ADDS
// Add our custom `counter` reducer, with the initial state as a zero count.
// Note:  The initial state (3rd param) will automatically be wrapped in
// `seamless-immutable` by the kit's Redux init code, so plain objects are
// automatically immutable by default


/* REDUCERS */
_config2.default.addReducer('counter', _counter2.default, { count: 0 }); // ----------------------
// IMPORTS
// Config API for adding reducers and configuring ReactQL app

_config2.default.addReducer('loginModal', _login_modal2.default, { show: false });

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
// Sample reducer, showing how you can 'listen' to the `INCREMENT_COUNTER`
// action, and update the counter state

// Note: There's no need to specify default state, because the kit's Redux
// init code wraps `undefined` state values in a `defaultReducer()` function,
// that captures Redux sentinel vals and responds back with a black object --
// so in our reducer functions, we can safely assume we're working with 'real'
// immutable state

function reducer(state, action) {
  if (action.type === 'INCREMENT_COUNTER') {
    // Where did `state.merge()` come from?  Our plain state object is automatically
    // wrapped in a call to `seamless-immutable` in our reducer init code,
    // so we can use its functions to return a guaranteed immutable version
    return state.merge({
      count: state.count + 1
    });
  }
  return state;
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _immutable = __webpack_require__(62);

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      // replace loginModal state with payload in TOGGLE_MODAL action
      return action.payload; // TODO: verify that not using a more immutable struct here is ok
    default:
      return state;
  }
}

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------
// PROJECT CONFIGURATION

// eslint-disable-next-line no-console
console.log('project config being run');
// eslint-disable-next-line no-console
// ----------------------
// IMPORTS
// Config API for adding reducers and configuring ReactQL app
console.log(Object({"HOST":"localhost","PORT":"8081","SSL_PORT":null,"NODE_ENV":"development","DEBUG":true}));

/* BACKEND */
const uriOptions = {
  servers: {
    development: '127.0.0.1:8000',
    production: ''
  },
  slugs: {
    graphql: 'gql',
    jwtRetrieve: 'api-token-auth'
  }
};

/* GRAPHQL */
// TODO: add logic to determine graphql,jwt endpoint in docker for aws swarm
if (true) {
  _config2.default.setGraphQLEndpoint(`http://${uriOptions.servers.development}/${uriOptions.slugs.graphql}/`);
  _config2.default.setJwtEndpoint(`http://${uriOptions.servers.development}/${uriOptions.slugs.jwtRetrieve}/`);
  // eslint-disable-next-line no-console
  console.log(`set graphql endpoint to ${_config2.default.graphQLEndpoint} in project config`);
  // eslint-disable-next-line no-console
  console.log(`set endpoint to retrieve jwt to ${_config2.default.jwtEndpoint} in project config`);
}

/* APOLLO */
// TODO: figure out if setting this here is OK if network int.
// is created before, in browser and server_*.js.
_config2.default.setApolloNetworkOptions({
  credentials: 'same-origin'
});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------
// SERVER CONFIGURATION

// Set server config, by checking `SERVER` -- this code path will be
// eliminated by Webpack in the browser bundle.

if (true) {
  /* SSL */

  // Leaving server as plain HTTP for now, since using Nginx upstream to handle
  // HTTPS is recommmended. See config/example.js for explanation about options.

  // const cert = require('src/cert/self_signed');
  // config.enableSSL({ key: cert.key, cert: cert.cert });

  /* CUSTOM ROUTES */

  // Not enabling any custom routes at the moment. See config/example.js fmi.
  // config.addGetRoute('/test', async ctx => {
  //   ctx.body = `Body content here`;
  // });

  /* CUSTOM 404 HANDLER */

  // custom 404 for server routes. see config/example.js fmi.

  _config2.default.set404Handler(ctx => {
    const stateDump = JSON.stringify(ctx.store.getState());
    ctx.status = 404;
    ctx.body = `This route does not exist on the server - Redux dump: ${stateDump}`;
  });

  /* CUSTOM ERROR HANDLER */

  //  where `e` is the error thrown, `ctx` is the Koa context object.
  // not incorporating third-party tools with next() yet.
  // see config/example.js fmi.
  _config2.default.setErrorHandler((e, ctx /* `next` is unused in this example */) => {
    // eslint-disable-next-line no-console
    console.log('Error: ', e.message);
    ctx.body = `Some kind of error. Check your source code.\n${e.message}`;
  });

  /* CUSTOM KOA APP INSTANTIATION */

  // config of`app` outside of middleware/routing
  // see config/example.js fmi & examples.
  _config2.default.getKoaApp(app => {
    // add new `engine` key to the app.context` prototype; used by middleware
    // below to set a `Powered-By` header.
    // eslint-disable-next-line no-param-reassign
    app.context.engine = 'ReactQL';
  });

  /* CUSTOM MIDDLEWARE */

  // Custom middleware to be processed on the server.
  _config2.default.addMiddleware(async (ctx, next) => {
    // custom header
    ctx.set('Powered-By', ctx.engine); // <-- `ctx.engine` srt above!

    // Redux action to manipulate the state on the server side.
    ctx.store.dispatch({ type: 'INCREMENT_COUNTER' });

    // Always return `next()`, otherwise the request won't 'pass' to the next
    // middleware in the stack (likely, the React handler)
    return next();
  });
} // ----------------------
// IMPORTS
// Config API for adding reducers and configuring ReactQL app

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------
// BROWSER CONFIGURATION

// Set browsesr config, by checking `SERVER`

if (false) {
  /* APOLLO */
  _config2.default.addApolloMiddleware((req, next) => {
    // TODO: figure out if I should sync server or graphql store with localstorage
    // for session-like purposes
    if (!req.options.headers) {
      req.options.headers = {};
    }

    const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

    req.options.headers.authorization = `JWT ${token}`;

    next();
  });
} // ----------------------
// IMPORTS
// Config API for adding reducers and configuring ReactQL app

/***/ }),
/* 66 */
/***/ (function(module, exports) {



/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-underscore-dangle */

/*
Custom Redux store creation.  Along with the default Apollo store,
we can define custom reducers using `kit/config.addReducer()` which will
be available on the server and in the browser.

Store state is wrapped by `seamless-immutable` to enforce a pattern of
immutability, to prevent weird side effects.
*/

// ----------------------
// IMPORTS

/* NPM */


/* Local */


exports.default = createNewStore;

var _redux = __webpack_require__(68);

var _reduxThunk = __webpack_require__(69);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _seamlessImmutable = __webpack_require__(70);

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Detect if we're both in the browser, AND we have dehydrated state
const hasState = !!(!true && window.__STATE__);

// Helper function that 'unwinds' the `config.reducers` Map, and provides
// the `reducer` function or `initialState` (wrapped in `seamless-immutable`)
// depending on what we asked for
function unwind(reducer = true) {
  // Unwind `config.reducers`.  If we're looking for the `reducer`, we'll
  // wrap this in a `defaultReducer` function that properly handles the Redux
  // 'undefined' sentinel value, or calls 'real' reducer if it's not undefined.
  //
  // If we're not looking for reducers, it'll pull out the `initialState`
  // variable instead, which we'll further process below
  const r = Object.assign({}, ...[].concat([..._config2.default.reducers].map(arr => ({
    [arr[0]]: reducer ? function defaultReducer(state, action) {
      // If `state` === undefined, this is Redux sending a sentinel value
      // to check our set-up.  So we'll send back a plain object to prove
      // that we're properly handling our reducer
      if (typeof state === 'undefined') return {};

      // Otherwise, call our real reducer with the {state, action}
      return arr[1].reducer(state, action);
    } : arr[1].initialState
  }))));

  // If this is a reducer, return at this point
  if (reducer) return r;

  // If not, we're looking for the state -- so let's map it and wrap the
  // object in `seamless-immutable`, to avoid side-effects with Redux
  return Object.assign({}, ...Object.keys(r).map(key => ({
    [key]: (0, _seamlessImmutable2.default)(hasState && window.__STATE__[key] || r[key])
  })));
}

function createNewStore(apolloClient) {
  const store = (0, _redux.createStore)(
  // By default, we'll use just the apollo reducer.  We can easily add our
  // own here, for global store management outside of Apollo
  (0, _redux.combineReducers)(_extends({
    apollo: apolloClient.reducer()
  }, unwind())),
  // Initial server state, provided by the server.
  _extends({
    apollo: hasState && window.__STATE__.apollo || {}
  }, unwind(false)), (0, _redux.compose)((0, _redux.applyMiddleware)(apolloClient.middleware(), _reduxThunk2.default),
  // Enable Redux Devtools on the browser, for easy state debugging
  // eslint-disable-next-line no-underscore-dangle
   false ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));

  return store;
}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("seamless-immutable");

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

/* eslint-disable react/no-danger, no-return-assign, no-param-reassign */

// Component to render the full HTML response in React

// ----------------------
// IMPORTS
const Html = ({ head, scripts, window, css, children }) => _react2.default.createElement(
  'html',
  { lang: 'en', prefix: 'og: http://ogp.me/ns#' },
  _react2.default.createElement(
    'head',
    null,
    _react2.default.createElement('meta', { charSet: 'utf-8' }),
    _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
    _react2.default.createElement('meta', { httpEquiv: 'Content-Language', content: 'en' }),
    _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
    head.meta.toComponent(),
    _react2.default.createElement('link', { rel: 'stylesheet', href: css }),
    head.title.toComponent()
  ),
  _react2.default.createElement(
    'body',
    null,
    _react2.default.createElement(
      'div',
      { id: 'main' },
      children
    ),
    _react2.default.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: Object.keys(window).reduce((out, key) => out += `window.${key}=${JSON.stringify(window[key])};`, '')
      } }),
    scripts.map(src => _react2.default.createElement('script', { key: src, src: src }))
  )
);

Html.propTypes = {
  head: _propTypes2.default.object.isRequired,
  window: _propTypes2.default.object.isRequired,
  scripts: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  css: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.element.isRequired
};

exports.default = Html;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClient = createClient;
exports.getNetworkInterface = getNetworkInterface;
exports.browserClient = browserClient;

var _reactApollo = __webpack_require__(3);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _env = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Helper function to create a new Apollo client, by merging in
// passed options alongside any set by `config.setApolloOptions` and defaults


/* ReactQL */

// Configuration
function createClient(opt = {}) {
  return new _reactApollo.ApolloClient(Object.assign({
    reduxRootSelector: state => state.apollo
  }, _config2.default.apolloClientOptions, opt));
}

// Wrap `createNetworkInterface` to attach middleware
// TODO: consider switching to createBatchingNetworkInterface, w/ settings to
// match https://github.com/mbrochh/django-graphql-apollo-react-demo#=


// Get environment, to figure out where we're running the GraphQL server
// ----------------------
// IMPORTS

/* NPM */

// Apollo client library
function getNetworkInterface(uri) {
  const networkInterface = (0, _reactApollo.createNetworkInterface)({
    uri,
    opts: _config2.default.apolloNetworkOptions
  });

  // Couldn't get network requests to not return 400 bad error when I used this
  // const networkInterface = createBatchingNetworkInterface({
  //   uri: 'http://localhost:8000/gql', // same as uri
  //   batchInterval: 10,
  //   opts: {  // same as config.apolloNetworkOptions
  //     credentials: 'same-origin',
  //   },
  // })

  // Attach middleware
  networkInterface.use(_config2.default.apolloMiddleware.map(f => ({ applyMiddleware: f })));
  networkInterface.useAfter(_config2.default.apolloAfterware.map(f => ({ applyAfterware: f })));

  return networkInterface;
}

// Creates a new browser client
function browserClient() {
  // If we have an internal GraphQL server, we need to append it with a
  // call to `getServerURL()` to add the correct host (in dev + production)
  const uri = _config2.default.graphQLServer ? `${(0, _env.getServerURL)()}${_config2.default.graphQLEndpoint}` : _config2.default.graphQLEndpoint;

  return createClient({
    networkInterface: getNetworkInterface(uri)
  });
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----------------------
// IMPORTS

const path = __webpack_require__(74);

// ----------------------

// Parent folder = project root
const root = path.join(__dirname, '..');

module.exports = {
  // Root project folder.  This is the current dir.
  root,

  // Kit.  ReactQL starter kit code.  You can edit these files, but be
  // aware that upgrading your starter kit could overwrite them
  kit: path.join(root, 'kit'),

  // Entry points.  This is where webpack will look for our browser.js,
  // server.js and vendor.js files to start building
  entry: path.join(root, 'kit', 'entry'),

  // Webpack configuration files
  webpack: path.join(root, 'kit', 'webpack'),

  // Views for internal use
  views: path.join(root, 'kit', 'views'),

  // Source path; where we'll put our application files
  src: path.join(root, 'src'),

  // Static files.  HTML, images, etc that can be processed by Webpack
  // before being moved into the final `dist` folder
  static: path.join(root, 'static'),

  // Dist path; where bundled assets will wind up
  dist: path.join(root, 'dist'),

  // Dist path for development; where dev assets will wind up
  distDev: path.resolve(root, 'dist', 'dev'),

  // Public.  This is where our web server will start looking to serve
  // static files from
  public: path.join(root, 'dist', 'public')
};

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ })
/******/ ]);
//# sourceMappingURL=server_dev.js.map