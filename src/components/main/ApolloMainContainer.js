// Main React component, that we'll import in `src/App.js`
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
import React from 'react';
import { gql, graphql } from 'react-apollo';

// Prop types
import PropTypes from 'prop-types';

// Routing via React Router
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

// <Helmet> component for setting the page title/meta tags
import Helmet from 'react-helmet';

/* ReactQL */

// NotFound 404 handler for unknown routes
import { Redirect } from 'kit/lib/routing';

/* Moshimoji */

// Child components
import GraphQLMessage from 'src/components/graphql';
import { Page, WhenNotFound } from 'src/components/routes';
import { Header, LoginModal } from 'src/components/main';
import modules from 'src/components/modules';

import ReduxCounter from 'src/components/redux';
import Stats from 'src/components/stats';
import Styles from 'src/components/styles';

// Styles
import css from './main.scss';

// Get the ReactQL logo.  This is a local .svg file, which will be made
// available as a string relative to [root]/dist/assets/img/
import logo from './reactql-logo.svg';

// ----------------------
// COMPONENT: MainContainer
// MainContainer contains the contents of the main view.
const mainContainerQuery = gql`
  {
    currentUser {
      id
    }
  }
`;

const MainContainer = ({ data }) => (
  <div>
    { /* -- meta */ }
    <Helmet
      title="moshimoji"
      meta={[{
        name: 'description',
        content: 'Community-driven platform to read, share, and publish manga and other comics.',
      }]} />

    { /* -- Modal */ }
    <LoginModal
      toggleModal={null} />

    { /* -- header */ }
    <div className={css.hello}>
      <Link to="/"><h1>moshimoji</h1></Link>
    </div>
    <hr />

    { /* -- login / logout / register buttons */ }
    <Header
      userAuthed={data.currentUser !== null}
      dataLoading={data.loading} />
    <hr />

    { /* -- nav */ }
    <ul>
      <li><Link to="/reader">reader</Link></li>
      <li><Link to="/database">database</Link></li>
      <li><Link to="/forum">forum</Link></li>
      <li><Link to="/reviews">reviews</Link></li>
      <li><Link to="/doujin">doujin</Link></li>
      <li><Link to="/page/example">Example page</Link></li>
      <li><Link to="/old/path">Redirect from /old/path &#8594; /new/path</Link></li>
    </ul>
    <hr />

    { /* -- hm */ }
    <Switch>
      <Route exact path="/" component={modules.SiteNews} />
      <Route path="/dashboard" component={modules.Dashboard} />
      <Route path="/reader" component={modules.Reader} />
      <Route path="/database" component={modules.Database} />
      <Route path="/forum" component={modules.Forum} />
      <Route path="/reviews" component={modules.Reviews} />
      <Route path="/doujin" component={modules.Doujin} />
      <Route path="/page/:name" component={Page} />
      <Redirect from="/old/path" to="/new/path" />
      <Route component={WhenNotFound} />
    </Switch>
    <hr />

    { /* -- message component */ }
    <GraphQLMessage />
    <hr />

    { /* -- counter component */ }
    <ReduxCounter />
    <hr />

    { /* -- runtime info */ }
    <p>Runtime info:</p>
    <Stats />
    <hr />

    { /* -- styles info */ }
    <p>Stylesheet examples:</p>
    <Styles />
  </div>
);

MainContainer.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    currentUser: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const ApolloMainContainer = graphql(mainContainerQuery)(MainContainer);

export default ApolloMainContainer;
