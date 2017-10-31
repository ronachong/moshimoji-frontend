webpackJsonp([0],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Redirect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(59);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-param-reassign */

// ----------------------
// IMPORTS






// ----------------------

// <Status code="xxx"> component.  Updates the context router's context, which
// can be used by the server handler to respond to the status on the server.

var Status = function (_React$PureComponent) {
  _inherits(Status, _React$PureComponent);

  function Status() {
    _classCallCheck(this, Status);

    return _possibleConstructorReturn(this, (Status.__proto__ || Object.getPrototypeOf(Status)).apply(this, arguments));
  }

  _createClass(Status, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          code = _props.code,
          children = _props.children;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], { render: function render(_ref) {
          var staticContext = _ref.staticContext;

          if (staticContext) {
            staticContext.status = code;
          }
          return children;
        } });
    }
  }]);

  return Status;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

// <NotFound> component.  If this renders on the server in development mode,
// it will attempt to proxyify the request to the upstream `webpack-dev-server`.
// In production, it will issue a hard 404 and render.  In the browser, it will
// simply render.


Status.propTypes = {
  code: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};
Status.defaultProps = {
  children: null
};
var NotFound = function (_React$PureComponent2) {
  _inherits(NotFound, _React$PureComponent2);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Status,
        { code: 404 },
        children
      );
    }
  }]);

  return NotFound;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

// <Redirect> component. Mirrors React Router's component by the same name,
// except it sets a 301/302 status code for setting server-side HTTP headers.
NotFound.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};
NotFound.defaultProps = {
  children: null
};
var Redirect = function (_React$PureComponent3) {
  _inherits(Redirect, _React$PureComponent3);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, (Redirect.__proto__ || Object.getPrototypeOf(Redirect)).apply(this, arguments));
  }

  _createClass(Redirect, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          to = _props2.to,
          from = _props2.from,
          push = _props2.push,
          permanent = _props2.permanent;

      var code = permanent ? 301 : 302;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Status,
        { code: code },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Redirect */], { to: to, from: from, push: push })
      );
    }
  }]);

  return Redirect;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);
Redirect.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired,
  from: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  permanent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
Redirect.defaultProps = {
  from: null,
  push: false,
  permanent: false
};

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {/* harmony export (immutable) */ __webpack_exports__["a"] = toggleLoginModal;
function toggleLoginModal(bool) {
  console.log('toggleLoginModal being called');
  return {
    type: 'TOGGLE_MODAL',
    payload: {
      show: bool
    }
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
var _templateObject = _taggedTemplateLiteral(['\nmutation UserStatusForm($text: String!) {\n  createUserStatus(text: $text) {\n    reqStatus,\n    formErrors,\n    userStatus {\n      id\n    }\n  }\n}\n'], ['\nmutation UserStatusForm($text: String!) {\n  createUserStatus(text: $text) {\n    reqStatus,\n    formErrors,\n    userStatus {\n      id\n    }\n  }\n}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n{\n  currentUser {\n    id\n  }\n}\n'], ['\n{\n  currentUser {\n    id\n  }\n}\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n{\n  allUserStatuses {\n    edges {\n      node {\n        id,\n        creationDate,\n        text\n      }\n    }\n  }\n}\n'], ['\n{\n  allUserStatuses {\n    edges {\n      node {\n        id,\n        creationDate,\n        text\n      }\n    }\n  }\n}\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Dashboard = function Dashboard() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      null,
      'Dashboard'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ApolloUserStatusForm, null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ApolloUserStatusesContainer, null)
  );
};

var userStatusFormMutation = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["gql"])(_templateObject);

var userStatusFormQuery = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["gql"])(_templateObject2);

var UserStatusForm = function UserStatusForm(_ref) {
  var data = _ref.data,
      mutate = _ref.mutate;

  if (data.loading) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      'Loading...'
    );
  }

  console.assert(data.currentUser, 'User status form accessed while user not logged in');

  var form = null;
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    var status = new FormData(form);
    mutate({ variables: { text: status.get('text') } }).then(function (res) {
      if (res.status === 200) {
        console.log('status submitted successfully');
      }
    }).catch(function (err) {
      console.log('Network error: ' + err);
    });
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h3',
      null,
      'Update your status'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'form',
      {
        ref: function ref(_ref2) {
          form = _ref2;
        },
        onSubmit: function onSubmit(e) {
          return handleSubmit(e);
        } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { name: 'text' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { type: 'submit' },
        'Submit'
      )
    )
  );
};

var ApolloUserStatusForm = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(userStatusFormQuery)(UserStatusForm);
ApolloUserStatusForm = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(userStatusFormMutation)(ApolloUserStatusForm);

var query = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["gql"])(_templateObject3);

// I can create stateless functional components which receive data from apollo,
// if I use the graphql(query)(component) pattern (instead of class decorator).
var UserStatusesContainer = function UserStatusesContainer(_ref3) {
  var data = _ref3.data;

  console.log(data);

  if (data.loading) {
    console.log(data);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      'Loading...'
    );
  }

  var presentation = !data.allUserStatuses ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'p',
    null,
    'Error retrieving data'
  ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(UserStatusesPresentation, { user_status_edges: data.allUserStatuses.edges });

  if (!data.allUserStatuses) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      'Error retrieving data'
    );
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    allUserStatuses: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      edges: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
        node: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
          id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
          creationDate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
          text: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
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

var ApolloUserStatusesContainer = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(query)(UserStatusesContainer);

var UserStatusesPresentation = function UserStatusesPresentation(_ref4) {
  var user_status_edges = _ref4.user_status_edges;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    user_status_edges.map(function (user_status) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { key: user_status.node.id },
        '\'',
        user_status.node.text,
        '\' created ',
        user_status.node.creationDate
      );
    })
  );
};

UserStatusesPresentation.propTypes = {
  user_status_edges: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    node: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
      creationDate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
      text: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
    }).isRequired
  }).isRequired).isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Dashboard);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(215);


/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_app__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_kit_lib_apollo__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_kit_lib_redux__ = __webpack_require__(518);
// Browser entry point, for Webpack.  We'll grab the browser-flavoured
// versions of React mounting, routing etc to hook into the DOM

// ----------------------
// IMPORTS

/* NPM */

// Enable async/await and generators, cross-browser


// Patch global.`fetch` so that Apollo calls to GraphQL work


// React parts



// Browser routing


// Apollo Provider. This HOC will 'wrap' our React component chain
// and handle injecting data down to any listening component


/* ReactQL */

// Root component.  This is our 'entrypoint' into the app.  If you're using
// the ReactQL starter kit for the first time, `src/app.js` is where
// you can start editing to add your own code.  Note:  This first is imported
// first, since it sets up our app's settings


// Grab the shared Apollo Client


// Custom redux store creator.  This will allow us to create a store 'outside'
// of Apollo, so we can apply our own reducers and make use of the Redux dev
// tools in the browser


// ----------------------

// Create a new browser Apollo client
var client = Object(__WEBPACK_IMPORTED_MODULE_7_kit_lib_apollo__["a" /* browserClient */])();

// Create a new Redux store
var store = Object(__WEBPACK_IMPORTED_MODULE_8_kit_lib_redux__["a" /* default */])(client);

// Create the 'root' entry point into the app.  If we have React hot loading
// (i.e. if we're in development), then we'll wrap the whole thing in an
// <AppContainer>.  Otherwise, we'll jump straight to the browser router
function doRender() {
  __WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.hydrate(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Root, null), document.getElementById('main'));
}

// The <Root> component.  We'll run this as a self-contained function since
// we're using a bunch of temporary vars that we can safely discard.
//
// If we have hot reloading enabled (i.e. if we're in development), then
// we'll wrap the whole thing in <AppContainer> so that our views can respond
// to code changes as needed
var Root = function () {
  // Wrap the component hierarchy in <BrowserRouter>, so that our children
  // can respond to route changes
  var Chain = function Chain() {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5_react_apollo__["ApolloProvider"],
      { store: store, client: client },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["a" /* BrowserRouter */],
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_src_app__["a" /* default */], null)
      )
    );
  };

  // React hot reloading -- only enabled in development.  This branch will
  // be shook from production, so we can run a `require` statement here
  // without fear that it'll inflate the bundle size
  if (false) {
    // <AppContainer> will respond to our Hot Module Reload (HMR) changes
    // back from WebPack, and handle re-rendering the chain as needed
    var AppContainer = require('react-hot-loader').AppContainer;

    // Start our 'listener' at the root component, so that any changes that
    // occur in the hierarchy can be captured
    module.hot.accept('src/app', function () {
      // Refresh the entry point of our app, to get the changes.

      // eslint-disable-next-line
      require('src/app').default;

      // Re-render the hierarchy
      doRender();
    });

    return function () {
      return React.createElement(
        AppContainer,
        null,
        React.createElement(Chain, null)
      );
    };
  }
  return Chain;
}();

doRender();

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_components_main__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_reducers_add_calls__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_config_project__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_config_server__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_config_browser__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_global_css__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_global_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_global_css__);
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



// Init config





// Init global styles.  These will be added to the resulting CSS automatically
// without any class hashing.  Use this to include default or framework CSS.


// ----------------------
// export the root component we want to mount as the starting point to our app.
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_src_components_main__["a" /* default */]);

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_kit_lib_routing__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_components_graphql__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_components_routes__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_components_main_index_LoginModal__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_components_main_index_DashboardLinkOrButton__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_src_components_modules_all__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_src_components_redux__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_src_components_stats__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_src_components_styles__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__main_scss__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reactql_logo_svg__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reactql_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__reactql_logo_svg__);
var _templateObject = _taggedTemplateLiteral(['\n{\n  currentUser {\n    id\n  }\n}\n'], ['\n{\n  currentUser {\n    id\n  }\n}\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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



// Routing via React Router


// <Helmet> component for setting the page title/meta tags


/* ReactQL */

// NotFound 404 handler for unknown routes


/* App */

// Child React components. Note:  We can either export one main React component
// per file, or in the case of <Home>, <Page> and <WhenFound>, we can group
// multiple components per file where it makes sense to do so










// Styles


// Get the ReactQL logo.  This is a local .svg file, which will be made
// available as a string relative to [root]/dist/assets/img/


// ----------------------

var query = Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["gql"])(_templateObject);

var IndexContainer = function IndexContainer(_ref) {
  var data = _ref.data;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_helmet___default.a, {
      title: 'moshimoji',
      meta: [{
        name: 'description',
        content: 'Community-driven platform to read, share, and publish manga and other comics.'
      }] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_src_components_main_index_LoginModal__["a" /* default */], {
      toggleModal: null }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_13__main_scss___default.a.hello },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */],
        { to: '/' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'moshimoji'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_13__main_scss___default.a.hello },
      data.loading || false ?
      // TODO: use presentational component for first button
      // TODO: make sure first button is grayed out when loading or initial react
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { onClick: console.log('dashboard button clicked while inactive') },
        'dashboard'
      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_src_components_main_index_DashboardLinkOrButton__["a" /* default */], { currentUser: data.currentUser })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */],
          { to: '/reader' },
          'reader'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */],
          { to: '/database' },
          'database'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */],
          { to: '/forum' },
          'forum'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */],
          { to: '/reviews' },
          'reviews'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */],
          { to: '/doujin' },
          'doujin'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */],
          { to: '/page/example' },
          'Example page'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */],
          { to: '/old/path' },
          'Redirect from /old/path \u2192 /new/path'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["e" /* Switch */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_9_src_components_modules_all__["a" /* default */].SiteNews }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], { path: '/dashboard', component: __WEBPACK_IMPORTED_MODULE_9_src_components_modules_all__["a" /* default */].Dashboard }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], { path: '/reader', component: __WEBPACK_IMPORTED_MODULE_9_src_components_modules_all__["a" /* default */].Reader }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], { path: '/database', component: __WEBPACK_IMPORTED_MODULE_9_src_components_modules_all__["a" /* default */].Database }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], { path: '/forum', component: __WEBPACK_IMPORTED_MODULE_9_src_components_modules_all__["a" /* default */].Forum }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], { path: '/reviews', component: __WEBPACK_IMPORTED_MODULE_9_src_components_modules_all__["a" /* default */].Reviews }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], { path: '/doujin', component: __WEBPACK_IMPORTED_MODULE_9_src_components_modules_all__["a" /* default */].Doujin }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], { path: '/page/:name', component: __WEBPACK_IMPORTED_MODULE_6_src_components_routes__["a" /* Page */] }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_kit_lib_routing__["b" /* Redirect */], { from: '/old/path', to: '/new/path' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], { component: __WEBPACK_IMPORTED_MODULE_6_src_components_routes__["b" /* WhenNotFound */] })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_src_components_graphql__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_src_components_redux__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      'Runtime info:'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_src_components_stats__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      'Stylesheet examples:'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_src_components_styles__["a" /* default */], null)
  );
};

var ApolloIndexContainer = Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["graphql"])(query)(IndexContainer);

/* harmony default export */ __webpack_exports__["a"] = (ApolloIndexContainer);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Simple class to act as a singleton for app-wide configuration.

// We'll start with a common config that can be extended separately by the
// server/client, to provide environment-specific functionality
var Common = function () {
  function Common() {
    _classCallCheck(this, Common);

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


  _createClass(Common, [{
    key: 'addReducer',
    value: function addReducer(key, reducer) {
      var initialState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (typeof reducer !== 'function') {
        throw new Error('Can\'t add reducer for \'' + key + '\' - reducer must be a function');
      }
      this.reducers.set(key, {
        reducer: reducer,
        initialState: initialState
      });
    }

    /* GRAPHQL */

    // Enables internal GraphQL server.  Default GraphQL and GraphiQL endpoints
    // can be overridden

  }, {
    key: 'enableGraphQLServer',
    value: function enableGraphQLServer() {
      var endpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/graphql';
      var graphiQL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.graphQLServer = true;
      this.graphQLEndpoint = endpoint;
      this.graphiQL = graphiQL;
    }

    // Set an external GraphQL URI for use with Apollo

  }, {
    key: 'setGraphQLEndpoint',
    value: function setGraphQLEndpoint(uri) {
      var graphiQL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.graphQLEndpoint = uri;
      this.graphiQL = graphiQL;
    }

    // Set a URI to retrieve jwt tokens for auth

  }, {
    key: 'setJwtEndpoint',
    value: function setJwtEndpoint(uri) {
      this.jwtEndpoint = uri;
    }

    // Register Apollo middleware function

  }, {
    key: 'addApolloMiddleware',
    value: function addApolloMiddleware(middlewareFunc) {
      this.apolloMiddleware.push(middlewareFunc);
    }

    // Register Apollo afterware function

  }, {
    key: 'addApolloAfterware',
    value: function addApolloAfterware(afterwareFunc) {
      this.apolloAfterware.push(afterwareFunc);
    }

    // Apollo Client options.  These will be merged in with the `createClient`
    // default options defined in `kit/lib/apollo.js`

  }, {
    key: 'setApolloClientOptions',
    value: function setApolloClientOptions() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.apolloClientOptions = opt;
    }

    // Apollo Network options.  These will be merged in with the `createNetworkInterface`
    // default options defined in `kit/lib/apollo.js`

  }, {
    key: 'setApolloNetworkOptions',
    value: function setApolloNetworkOptions() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.apolloNetworkOptions = opt;
    }
  }]);

  return Common;
}();

// Placeholder for the class we'll attach


var Config = void 0;

// Server Config extensions.  This is wrapped in a `SERVER` block to avoid
// adding unnecessary functionality to the client bundle.  Every byte counts!
if (false) {
  Config = function (_Common) {
    _inherits(ServerConfig, _Common);

    function ServerConfig() {
      _classCallCheck(this, ServerConfig);

      // Create a set for routes -- to retrieve based on insertion order
      var _this = _possibleConstructorReturn(this, (ServerConfig.__proto__ || Object.getPrototypeOf(ServerConfig)).call(this));

      _this.routes = new Set();

      // Koa application function. But default, this is null
      _this.koaAppFunc = null;

      // Flag for setting whether plain HTTP should be disabled
      _this.enableHTTP = true;

      // Force SSL. Rewrites all non-SSL queries to SSL.  False, by default.
      _this.enableForceSSL = false;

      // Options for enabling SSL. By default, this is null. If SSL is enabled
      // in userland, this would instead hold an object of options
      _this.sslOptions = null;

      // Custom middleware -- again, based on insertion order
      _this.middleware = new Set();

      // GraphQL schema (if we're using an internal server)
      _this.graphQLSchema = null;

      // Attach a GraphiQL IDE endpoint to our server?  By default - no.  If
      // this === true, this will default to `/graphql`.  If it's a string, it'll
      // default to the string value
      _this.graphiQL = false;

      // Enable body parsing by default.  Leave `koa-bodyparser` opts as default
      _this.enableBodyParser = true;
      _this.bodyParserOptions = {};

      // CORS options for `koa-cors`
      _this.corsOptions = {};
      return _this;
    }

    /* WEB SERVER / SSR */

    // Get access to Koa's `app` instance, for adding custom instantiation
    // or doing something that's not covered by other functions


    _createClass(ServerConfig, [{
      key: 'getKoaApp',
      value: function getKoaApp(func) {
        this.koaAppFunc = func;
      }

      // Enable SSL. Normally, you'd use an upstream proxy like Nginx to handle
      // SSL. But if you want to run a 'bare' Koa HTTPS web server, you can pass
      // in the certificate details here and it'll respond to SSL requests

    }, {
      key: 'enableSSL',
      value: function enableSSL(opt) {
        // At a minimum, we should have `key` and `cert` -- check for those
        if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) !== 'object' || !opt.key || !opt.cert) {
          throw new Error('Cannot enable SSL. Missing `key` and/or `cert`');
        }
        this.sslOptions = opt;
      }

      // Force SSL. Rewrites all non-SSL queries to SSL. Any options here are
      // passed to `koa-sslify`, the SSL enforcement middleware

    }, {
      key: 'forceSSL',
      value: function forceSSL() {
        var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this.enableForceSSL = opt;
      }

      // Disable plain HTTP.  Note this should only be used if you've also set
      // `enableSSL()` and you don't want dual-HTTP+SSL config

    }, {
      key: 'disableHTTP',
      value: function disableHTTP() {
        this.enableHTTP = false;
      }

      // Disable the optional `koa-bodyparser`, to prevent POST data being sent to
      // each request.  By default, body parsing is enabled.

    }, {
      key: 'disableBodyParser',
      value: function disableBodyParser() {
        this.enableBodyParser = false;
      }
    }, {
      key: 'setBodyParserOptions',
      value: function setBodyParserOptions() {
        var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this.bodyParserOptions = opt;
      }

      // 404 handler for the server.  By default, `kit/entry/server.js` will
      // simply return a 404 status code without modifying the HTML render.  By
      // setting a handler here, this will be returned instead

    }, {
      key: 'set404Handler',
      value: function set404Handler(func) {
        if (typeof func !== 'function') {
          throw new Error('404 handler must be a function');
        }
        this.handler404 = func;
      }

      // Error handler.  If this isn't defined, the server will simply return a
      // 'There was an error. Please try again later.' message, and log the output
      // to the console.  Override that behaviour by passing a (e, ctx, next) -> {} func

    }, {
      key: 'setErrorHandler',
      value: function setErrorHandler(func) {
        if (typeof func !== 'function') {
          throw new Error('Error handler must be a function');
        }
        this.errorHandler = func;
      }

      // Add custom middleware.  This should be an async func, for use with Koa

    }, {
      key: 'addMiddleware',
      value: function addMiddleware(middlewareFunc) {
        this.middleware.add(middlewareFunc);
      }

      // Adds a custom server route to attach to our Koa router

    }, {
      key: 'addRoute',
      value: function addRoute(method, route) {
        for (var _len = arguments.length, handlers = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          handlers[_key - 2] = arguments[_key];
        }

        this.routes.add({
          method: method,
          route: route,
          handlers: handlers
        });
      }

      // Adds custom GET route

    }, {
      key: 'addGetRoute',
      value: function addGetRoute(route) {
        for (var _len2 = arguments.length, handlers = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          handlers[_key2 - 1] = arguments[_key2];
        }

        this.addRoute.apply(this, ['get', route].concat(handlers));
      }

      // Adds custom POST route

    }, {
      key: 'addPostRoute',
      value: function addPostRoute(route) {
        for (var _len3 = arguments.length, handlers = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          handlers[_key3 - 1] = arguments[_key3];
        }

        this.addRoute.apply(this, ['post', route].concat(handlers));
      }

      // Adds custom PUT route

    }, {
      key: 'addPutRoute',
      value: function addPutRoute(route) {
        for (var _len4 = arguments.length, handlers = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          handlers[_key4 - 1] = arguments[_key4];
        }

        this.addRoute.apply(this, ['put', route].concat(handlers));
      }

      // Adds custom PATCH route

    }, {
      key: 'addPatchRoute',
      value: function addPatchRoute(route) {
        for (var _len5 = arguments.length, handlers = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
          handlers[_key5 - 1] = arguments[_key5];
        }

        this.addRoute.apply(this, ['patch', route].concat(handlers));
      }

      // Adds custom DELETE route

    }, {
      key: 'addDeleteRoute',
      value: function addDeleteRoute(route) {
        for (var _len6 = arguments.length, handlers = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          handlers[_key6 - 1] = arguments[_key6];
        }

        this.addRoute.apply(this, ['delete', route].concat(handlers));
      }

      // Set the GraphQL schema. This should only be called on the server, otherwise
      // the bundle size passed by the `schema` object will be unnecessarily inflated

    }, {
      key: 'setGraphQLSchema',
      value: function setGraphQLSchema(schema) {
        this.graphQLSchema = schema;
      }

      // CORS options, for `koa-cors` instantiation

    }, {
      key: 'setCORSOptions',
      value: function setCORSOptions() {
        var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this.corsOptions = opt;
      }
    }]);

    return ServerConfig;
  }(Common);
} else {
  // For the client config, we'll extend `Common` by default -- but if we need
  // anything unique to the browser in the future, we'd add it here...
  Config = function (_Common2) {
    _inherits(ClientConfig, _Common2);

    function ClientConfig() {
      _classCallCheck(this, ClientConfig);

      return _possibleConstructorReturn(this, (ClientConfig.__proto__ || Object.getPrototypeOf(ClientConfig)).apply(this, arguments));
    }

    return ClientConfig;
  }(Common);
}

// Since there's only one `Config` instance globally, we'll create the new
// instance here and export it.  This will then provide any subsequent imports
// with the same object, so we can add settings to a common config
/* harmony default export */ __webpack_exports__["a"] = (new Config());

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphQLMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_graphql_queries_all_user_statuses_gql__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_graphql_queries_all_user_statuses_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_src_graphql_queries_all_user_statuses_gql__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Now, let's create a GraphQL-enabled component...

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


// ----------------------

// Since this component needs to 'listen' to GraphQL data, we wrap it in
// `react-apollo`'s `graphql` HOC/decorator and pass in the query that this
// component requires.   Note: This is not to be confused with the `graphql`
// lib, which is used on the server-side to initially define the schema
var GraphQLMessage = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_3_src_graphql_queries_all_user_statuses_gql___default.a), _dec(_class = function (_React$PureComponent) {
  _inherits(GraphQLMessage, _React$PureComponent);

  function GraphQLMessage() {
    _classCallCheck(this, GraphQLMessage);

    return _possibleConstructorReturn(this, (GraphQLMessage.__proto__ || Object.getPrototypeOf(GraphQLMessage)).apply(this, arguments));
  }

  _createClass(GraphQLMessage, [{
    key: 'render',

    // TODO: create a function to generate gql from proptypes or vice versa, or
    // from a common object (would I need to refer to schema for field types?),
    // if that will save me time

    value: function render() {
      var data = this.props.data;
      // Since we're dealing with async GraphQL data, we defend against the
      // data not yet being loaded by checking to see that we have the `message`
      // key on our returned object
      //   const message = data.message && data.message.text;
      // TODO: understand how this line^ works

      // Apollo will tell us whether we're still loading.  We can also use this
      // check to ensure we have a fully returned response

      var isLoading = data.loading ? 'yes' : 'nope';
      var message = isLoading == 'nope' ? data.allUserStatuses.edges[0].node.text : 'None';
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Message from GraphQL server: ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'em',
            null,
            message
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Currently loading?: ',
          isLoading
        )
      );
    }
  }]);

  return GraphQLMessage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent)) || _class);
GraphQLMessage.propTypes = {
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    allUserStatuses: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      edges: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
        node: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
          id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
          text: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
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


/***/ }),

/***/ 318:
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

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Home */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WhenNotFound; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_kit_lib_routing__ = __webpack_require__(157);
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



/* ReactQL */

// NotFound 404 handler for unknown routes


// ----------------------

// We'll display this <Home> component when we're on the / route
var Home = function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h1',
    null,
    'You\'re on the home page - click another link above'
  );
};

// Helper component that will be conditionally shown when the route matches.
// This gives you an idea how React Router v4 works -- we have a `match`
// prop that gives us information on the route we can use within the component
var Page = function Page(_ref) {
  var match = _ref.match;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h1',
    null,
    'Changed route: ',
    match.params.name
  );
};

// Specify PropTypes if the `match` object, which is injected to props by
// the <Route> component
Page.propTypes = {
  match: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    params: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};

// Create a route that will be displayed when the code isn't found
var WhenNotFound = function WhenNotFound() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_kit_lib_routing__["a" /* NotFound */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'Unknown route - the 404 handler was triggered!'
    )
  );
};

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_kit_config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_actions__ = __webpack_require__(212);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ----------------------
// IMPORTS

/* NPM */



// HOC/decorator to listen to Redux store state







// ----------------------
// STYLING
var FADE_DURATION = 200;

var styles = {
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
    transform: 'translate(-' + 50 + '%, -' + 50 + '%)',
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
var LoginModal = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["a" /* connect */])(function (state) {
  return { loginModal: state.loginModal };
}), _dec(_class = function (_Component) {
  _inherits(LoginModal, _Component);

  function LoginModal() {
    _classCallCheck(this, LoginModal);

    return _possibleConstructorReturn(this, (LoginModal.__proto__ || Object.getPrototypeOf(LoginModal)).apply(this, arguments));
  }

  _createClass(LoginModal, [{
    key: 'handleSubmit',
    value: function handleSubmit(loginDest, e) {
      e.preventDefault();
      var data = new FormData(this.form);
      fetch(__WEBPACK_IMPORTED_MODULE_4_kit_config__["a" /* default */].jwtEndpoint, {
        method: 'POST',
        body: data
      }).then(function (res) {
        res.json().then(function (resJson) {
          if (resJson.token) {
            localStorage.setItem('token', resJson.token);
            window.location.replace(loginDest);
          }
        });
      }).catch(function (err) {
        console.log('Network error: ' + err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // TODO: add logic to compute destination dynamically.
      // can be dashboard or home/site news, depending on origin
      // of modal (dashboard button or link preceding)
      var loginDest = '/dashboard';

      return (
        // <Transition
        //   in={true}
        //   timeout={FADE_DURATION}
        //   className='fade'
        //   enteredClassName='in'
        //   enteringClassName='in'>
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["a" /* Modal */],
          {
            show: this.props.loginModal.show,
            onHide: function onHide() {
              _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__store_actions__["a" /* toggleLoginModal */])(false));
            },
            style: styles.modal,
            backdropStyle: styles.modalBackdrop },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["a" /* Modal */].Body,
            { style: styles.modalTextContainer },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'form',
              {
                ref: function ref(_ref) {
                  return _this2.form = _ref;
                },
                onSubmit: function onSubmit(e) {
                  return _this2.handleSubmit(loginDest, e);
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'label',
                  null,
                  'Username:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'username' })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'label',
                  null,
                  'Password:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'password', name: 'password' })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
  }]);

  return LoginModal;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class);
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


/* harmony default export */ __webpack_exports__["a"] = (LoginModal);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_components_reused_LinkOrButton__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_actions__ = __webpack_require__(212);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ----------------------
// IMPORTS

/* NPM */


// HOC/decorator to listen to Redux store state


// components


// Redux actions


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
var DashboardLinkOrButton = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* connect */])(), _dec(_class = function (_React$PureComponent) {
  _inherits(DashboardLinkOrButton, _React$PureComponent);

  function DashboardLinkOrButton(props) {
    _classCallCheck(this, DashboardLinkOrButton);

    // TODO: figure out if this should be setState instead
    var _this = _possibleConstructorReturn(this, (DashboardLinkOrButton.__proto__ || Object.getPrototypeOf(DashboardLinkOrButton)).call(this, props));

    if (_this.props.currentUser) {
      _this.isLink = true;
      _this.propsToPass = {
        uri: '/dashboard/site'
      };
    } else {
      _this.isLink = false;
      _this.propsToPass = {
        onClick: function onClick() {
          console.log('dashboard button was clicked');
          _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__store_actions__["a" /* toggleLoginModal */])(true));
        }
      };
    }
    return _this;
  }

  _createClass(DashboardLinkOrButton, [{
    key: 'render',
    value: function render() {
      var DisplayComponent = function DisplayComponent(_ref) {
        var onClick = _ref.onClick;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: onClick },
          'dashboard'
        );
      };

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_src_components_reused_LinkOrButton__["a" /* default */], {
        DisplayComponent: DisplayComponent,
        isLink: this.isLink,
        propsToPass: this.propsToPass });
    }
  }]);

  return DashboardLinkOrButton;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent)) || _class);
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


/* harmony default export */ __webpack_exports__["a"] = (DashboardLinkOrButton);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(59);



// <LinkOrButton displayComponent={const} onClick= />
var LinkOrButton = function LinkOrButton(_ref) {
  var DisplayComponent = _ref.DisplayComponent,
      isLink = _ref.isLink,
      propsToPass = _ref.propsToPass;

  if (isLink) {
    var uri = propsToPass.uri,
        _otherProps = propsToPass.otherProps;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
      { to: uri },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DisplayComponent, { props: _otherProps })
    );
  }

  var onClick = propsToPass.onClick,
      otherProps = propsToPass.otherProps;

  console.log('LinkOrButton');
  console.log(onClick);
  console.log(propsToPass);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DisplayComponent, { onClick: onClick, props: otherProps });
};

/* harmony default export */ __webpack_exports__["a"] = (LinkOrButton);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_components_modules_Dashboard__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_components_modules_Database__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_components_modules_Doujin__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_modules_Forum__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_components_modules_Reader__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_components_modules_Reviews__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_components_modules_SiteNews__ = __webpack_require__(498);








var modules = {
  Dashboard: __WEBPACK_IMPORTED_MODULE_0_src_components_modules_Dashboard__["a" /* default */],
  Database: __WEBPACK_IMPORTED_MODULE_1_src_components_modules_Database__["a" /* default */],
  Doujin: __WEBPACK_IMPORTED_MODULE_2_src_components_modules_Doujin__["a" /* default */],
  Forum: __WEBPACK_IMPORTED_MODULE_3_src_components_modules_Forum__["a" /* default */],
  Reader: __WEBPACK_IMPORTED_MODULE_4_src_components_modules_Reader__["a" /* default */],
  Reviews: __WEBPACK_IMPORTED_MODULE_5_src_components_modules_Reviews__["a" /* default */],
  SiteNews: __WEBPACK_IMPORTED_MODULE_6_src_components_modules_SiteNews__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = (modules);

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var Database = function Database() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h2',
    null,
    'Database module'
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Database);

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var Doujin = function Doujin() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h2',
    null,
    'Doujin module'
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Doujin);

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dashboard__ = __webpack_require__(213);



var Forum = function Forum() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      null,
      'Forum module'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Dashboard__["a" /* default */], null)
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Forum);

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var Reader = function Reader() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h2',
    null,
    'Reader module'
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Reader);

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var Reviews = function Reviews() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h2',
    null,
    'Reviews module'
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Reviews);

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var SiteNews = function SiteNews() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h2',
    null,
    'Site news module'
  );
};

/* harmony default export */ __webpack_exports__["a"] = (SiteNews);

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxCounter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(96);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Component that demonstrates using a part of the Redux store
// outside of Apollo.  We can use config.addReducer(key, reducer) in `src/app.js`
// to add custom Redux reducers

// ----------------------
// IMPORTS

/* NPM */



// HOC/decorator to listen to Redux store state


// ----------------------

// @connect accepts a function that takes the full Redux state, and then
// returns the portion of state that our component cares about.  In this example,
// we're listening to `state.counter`, which we can show inside the component
var ReduxCounter = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["a" /* connect */])(function (state) {
  return { counter: state.counter };
}), _dec(_class = function (_React$PureComponent) {
  _inherits(ReduxCounter, _React$PureComponent);

  function ReduxCounter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReduxCounter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReduxCounter.__proto__ || Object.getPrototypeOf(ReduxCounter)).call.apply(_ref, [this].concat(args))), _this), _this.triggerIncrement = function () {
      _this.props.dispatch({
        type: 'INCREMENT_COUNTER'
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // Trigger the `INCREMENT_COUNTER` action in Redux, to add 1 to the total.
  // Note: by using the `= () {}` format, we're implicitly binding the component
  // to `this`, which is why we can use @connect's `.dispatch()` function that's
  // passed in as a prop


  _createClass(ReduxCounter, [{
    key: 'render',
    value: function render() {
      var count = this.props.counter.count;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Listening to Redux counter: ',
          count
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: this.triggerIncrement },
          'Increment'
        )
      );
    }
  }]);

  return ReduxCounter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent)) || _class);
ReduxCounter.propTypes = {
  counter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    count: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired
  })
};
ReduxCounter.defaultProps = {
  counter: {
    count: 0
  } };


/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stats_scss__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stats_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stats_scss__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// Simple <Stats> component that displays our current environment.

// ----------------------
// IMPORTS

/* NPM */

// React


/* App */

// Styles


// ----------------------

/* harmony default export */ __webpack_exports__["a"] = (function () {
  // We can pull the environment from `process.env.NODE_ENV`, which is set
  // to either 'development' | 'production' on both the server and in the browser
  var info = [['Environment', "development"]];

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: __WEBPACK_IMPORTED_MODULE_1__stats_scss___default.a.data },
    info.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { key: key },
        key,
        ': ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          val
        )
      );
    })
  );
});

/***/ }),

/***/ 501:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"data":"data-1TlbpCj5FlrOdqUTJqH60F"};

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_less__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_less__);
// Example of CSS, SASS and LESS styles being used together

// ----------------------
// IMPORTS

/* NPM */


/* App */

// Styles




// ----------------------

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.styleExamples },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.example },
      'Styled by CSS'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.example },
      'Styled by SASS'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: __WEBPACK_IMPORTED_MODULE_3__styles_less___default.a.example },
      'Styled by LESS'
    )
  );
});

/***/ }),

/***/ 503:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"styleExamples":"styleExamples-1odAJW6hJJkT1H4az7KebJ","example":"example-HDBhpRi1XOtosKy5rqCSL"};

/***/ }),

/***/ 504:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"example":"example-3x1WZ3q5Zomb6qbpAqayqQ"};

/***/ }),

/***/ 505:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"example":"example-Qwu6EO0LZh1IVEfs-9zO_"};

/***/ }),

/***/ 506:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hello":"hello-3yYdKbSCZaFVyGKKMfKulk","logo":"logo-pd8BfVR8JEOTwAIiOe-h2"};

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/reactql-logo.7b90d212d7c2537aeffb13ed959c5491.svg";

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_kit_config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_reducers_counter__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_reducers_login_modal__ = __webpack_require__(510);
// ----------------------
// IMPORTS
// Config API for adding reducers and configuring ReactQL app


/* REDUCERS */



// ----------------------
// ADDS
// Add our custom `counter` reducer, with the initial state as a zero count.
// Note:  The initial state (3rd param) will automatically be wrapped in
// `seamless-immutable` by the kit's Redux init code, so plain objects are
// automatically immutable by default
__WEBPACK_IMPORTED_MODULE_0_kit_config__["a" /* default */].addReducer('counter', __WEBPACK_IMPORTED_MODULE_1_src_reducers_counter__["a" /* default */], { count: 0 });
__WEBPACK_IMPORTED_MODULE_0_kit_config__["a" /* default */].addReducer('loginModal', __WEBPACK_IMPORTED_MODULE_2_src_reducers_login_modal__["a" /* default */], { show: false });

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
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

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);


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

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_kit_config__ = __webpack_require__(31);
// ----------------------
// IMPORTS
// Config API for adding reducers and configuring ReactQL app


// ----------------------
// PROJECT CONFIGURATION

// eslint-disable-next-line no-console
console.log('project config being run');
// eslint-disable-next-line no-console
console.log(Object({"HOST":"localhost","PORT":"8081","SSL_PORT":null,"NODE_ENV":"development","DEBUG":true}));

/* BACKEND */
var uriOptions = {
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
  __WEBPACK_IMPORTED_MODULE_0_kit_config__["a" /* default */].setGraphQLEndpoint('http://' + uriOptions.servers.development + '/' + uriOptions.slugs.graphql + '/');
  __WEBPACK_IMPORTED_MODULE_0_kit_config__["a" /* default */].setJwtEndpoint('http://' + uriOptions.servers.development + '/' + uriOptions.slugs.jwtRetrieve + '/');
  // eslint-disable-next-line no-console
  console.log('set graphql endpoint to ' + __WEBPACK_IMPORTED_MODULE_0_kit_config__["a" /* default */].graphQLEndpoint + ' in project config');
  // eslint-disable-next-line no-console
  console.log('set endpoint to retrieve jwt to ' + __WEBPACK_IMPORTED_MODULE_0_kit_config__["a" /* default */].jwtEndpoint + ' in project config');
}

/* APOLLO */
// TODO: figure out if setting this here is OK if network int.
// is created before, in browser and server_*.js.
__WEBPACK_IMPORTED_MODULE_0_kit_config__["a" /* default */].setApolloNetworkOptions({
  credentials: 'same-origin'
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_kit_config__ = __webpack_require__(31);
var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// ----------------------
// IMPORTS
// Config API for adding reducers and configuring ReactQL app


// ----------------------
// SERVER CONFIGURATION

// Set server config, by checking `SERVER` -- this code path will be
// eliminated by Webpack in the browser bundle.

if (false) {
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

  config.set404Handler(function (ctx) {
    var stateDump = JSON.stringify(ctx.store.getState());
    ctx.status = 404;
    ctx.body = 'This route does not exist on the server - Redux dump: ' + stateDump;
  });

  /* CUSTOM ERROR HANDLER */

  //  where `e` is the error thrown, `ctx` is the Koa context object.
  // not incorporating third-party tools with next() yet.
  // see config/example.js fmi.
  config.setErrorHandler(function (e, ctx /* `next` is unused in this example */) {
    // eslint-disable-next-line no-console
    console.log('Error: ', e.message);
    ctx.body = 'Some kind of error. Check your source code.\n' + e.message;
  });

  /* CUSTOM KOA APP INSTANTIATION */

  // config of`app` outside of middleware/routing
  // see config/example.js fmi & examples.
  config.getKoaApp(function (app) {
    // add new `engine` key to the app.context` prototype; used by middleware
    // below to set a `Powered-By` header.
    // eslint-disable-next-line no-param-reassign
    app.context.engine = 'ReactQL';
  });

  /* CUSTOM MIDDLEWARE */

  // Custom middleware to be processed on the server.
  config.addMiddleware(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // custom header
              ctx.set('Powered-By', ctx.engine); // <-- `ctx.engine` srt above!

              // Redux action to manipulate the state on the server side.
              ctx.store.dispatch({ type: 'INCREMENT_COUNTER' });

              // Always return `next()`, otherwise the request won't 'pass' to the next
              // middleware in the stack (likely, the React handler)
              return _context.abrupt('return', next());

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_kit_config__ = __webpack_require__(31);
// ----------------------
// IMPORTS
// Config API for adding reducers and configuring ReactQL app


// ----------------------
// BROWSER CONFIGURATION

// Set browsesr config, by checking `SERVER`

if (true) {
  /* APOLLO */
  __WEBPACK_IMPORTED_MODULE_0_kit_config__["a" /* default */].addApolloMiddleware(function (req, next) {
    // TODO: figure out if I should sync server or graphql store with localstorage
    // for session-like purposes
    if (!req.options.headers) {
      req.options.headers = {};
    }

    var token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

    req.options.headers.authorization = 'JWT ' + token;

    next();
  });
}

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createClient */
/* unused harmony export getNetworkInterface */
/* harmony export (immutable) */ __webpack_exports__["a"] = browserClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_apollo__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_kit_config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_kit_lib_env__ = __webpack_require__(517);
// ----------------------
// IMPORTS

/* NPM */

// Apollo client library


/* ReactQL */

// Configuration


// Get environment, to figure out where we're running the GraphQL server


// ----------------------

// Helper function to create a new Apollo client, by merging in
// passed options alongside any set by `config.setApolloOptions` and defaults
function createClient() {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return new __WEBPACK_IMPORTED_MODULE_0_react_apollo__["ApolloClient"](Object.assign({
    reduxRootSelector: function reduxRootSelector(state) {
      return state.apollo;
    }
  }, __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].apolloClientOptions, opt));
}

// Wrap `createNetworkInterface` to attach middleware
// TODO: consider switching to createBatchingNetworkInterface, w/ settings to
// match https://github.com/mbrochh/django-graphql-apollo-react-demo#=
function getNetworkInterface(uri) {
  var networkInterface = Object(__WEBPACK_IMPORTED_MODULE_0_react_apollo__["createNetworkInterface"])({
    uri: uri,
    opts: __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].apolloNetworkOptions
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
  networkInterface.use(__WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].apolloMiddleware.map(function (f) {
    return { applyMiddleware: f };
  }));
  networkInterface.useAfter(__WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].apolloAfterware.map(function (f) {
    return { applyAfterware: f };
  }));

  return networkInterface;
}

// Creates a new browser client
function browserClient() {
  // If we have an internal GraphQL server, we need to append it with a
  // call to `getServerURL()` to add the correct host (in dev + production)
  var uri = __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].graphQLServer ? '' + Object(__WEBPACK_IMPORTED_MODULE_2_kit_lib_env__["a" /* getServerURL */])() + __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].graphQLEndpoint : __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].graphQLEndpoint;

  return createClient({
    networkInterface: getNetworkInterface(uri)
  });
}

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getServerURL;
/* eslint-disable import/prefer-default-export */

// Environment-aware functions

// Get the protocol://host:port of where the current server would bind
function getServerURL() {
  var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "localhost";
  var port = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "8081";
  var allowSSL = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  // Check for SSL
  if (allowSSL && null) {
    var _stub = 'https://' + (host || "localhost");

    // If we're on port 443, that's 'regular' SSL so no need to specify port
    if (null === '443') return _stub;
    return _stub + ':' + null;
  }

  // Plain HTTP
  var stub = 'http://' + (host || "localhost");

  // If we're on port 80, that's 'regular' HTTP so no need to specify port
  if (port === '80') return stub;
  return stub + ':' + port;
}

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createNewStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_seamless_immutable__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_seamless_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_seamless_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_kit_config__ = __webpack_require__(31);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable no-underscore-dangle */

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


// ----------------------

// Detect if we're both in the browser, AND we have dehydrated state
var hasState = !!(!false && window.__STATE__);

// Helper function that 'unwinds' the `config.reducers` Map, and provides
// the `reducer` function or `initialState` (wrapped in `seamless-immutable`)
// depending on what we asked for
function unwind() {
  var reducer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  // Unwind `config.reducers`.  If we're looking for the `reducer`, we'll
  // wrap this in a `defaultReducer` function that properly handles the Redux
  // 'undefined' sentinel value, or calls 'real' reducer if it's not undefined.
  //
  // If we're not looking for reducers, it'll pull out the `initialState`
  // variable instead, which we'll further process below
  var r = Object.assign.apply(Object, [{}].concat(_toConsumableArray([].concat([].concat(_toConsumableArray(__WEBPACK_IMPORTED_MODULE_3_kit_config__["a" /* default */].reducers)).map(function (arr) {
    return _defineProperty({}, arr[0], reducer ? function defaultReducer(state, action) {
      // If `state` === undefined, this is Redux sending a sentinel value
      // to check our set-up.  So we'll send back a plain object to prove
      // that we're properly handling our reducer
      if (typeof state === 'undefined') return {};

      // Otherwise, call our real reducer with the {state, action}
      return arr[1].reducer(state, action);
    } : arr[1].initialState);
  })))));

  // If this is a reducer, return at this point
  if (reducer) return r;

  // If not, we're looking for the state -- so let's map it and wrap the
  // object in `seamless-immutable`, to avoid side-effects with Redux
  return Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.keys(r).map(function (key) {
    return _defineProperty({}, key, __WEBPACK_IMPORTED_MODULE_2_seamless_immutable___default()(hasState && window.__STATE__[key] || r[key]));
  }))));
}

function createNewStore(apolloClient) {
  var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(
  // By default, we'll use just the apollo reducer.  We can easily add our
  // own here, for global store management outside of Apollo
  Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(_extends({
    apollo: apolloClient.reducer()
  }, unwind())),
  // Initial server state, provided by the server.
  _extends({
    apollo: hasState && window.__STATE__.apollo || {}
  }, unwind(false)), Object(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(apolloClient.middleware(), __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a),
  // Enable Redux Devtools on the browser, for easy state debugging
  // eslint-disable-next-line no-underscore-dangle
  !false && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
    return f;
  }));

  return store;
}

/***/ })

},[214]);
//# sourceMappingURL=browser.js.map