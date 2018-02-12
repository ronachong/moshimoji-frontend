// ----------------------
// (some) IMPORTS

import { InMemoryCache } from 'apollo-cache-inmemory';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// Config API for adding reducers and configuring ReactQL app
import config from 'kit/config';
import introspectionQueryResultData from 'config/fragmentTypes.json';

// ----------------------
// PROJECT CONFIGURATION

// eslint-disable-next-line no-console
console.log('project config being run');
// eslint-disable-next-line no-console
console.log(process.env);

/* BACKEND */
const uriOptions = {
  servers: {
    development: '127.0.0.1:8000',
    production: '',
    cdn: 'd2srxik7hofznk.cloudfront.net'
  },
  slugs: {
    graphql: 'gql',
    jwtRetrieve: 'api-token-auth',
    forum: 'forum'
  },
};

/* GRAPHQL */
// TODO: add logic to determine graphql,jwt endpoint in docker for aws swarm
if (process.env.NODE_ENV === 'development') {
  config.setGraphQLEndpoint(
    `http://${uriOptions.servers.development}/${uriOptions.slugs.graphql}/`
  );
  config.setJwtEndpoint(
    `http://${uriOptions.servers.development}/${uriOptions.slugs.jwtRetrieve}/`
  );
  config.setForumEndpoint(
    `http://${uriOptions.servers.development}/${uriOptions.slugs.forum}/`
  );
  // eslint-disable-next-line no-console
  console.log(`set graphql endpoint to ${config.graphQLEndpoint} in project config`);
  // eslint-disable-next-line no-console
  console.log(`set endpoint to retrieve jwt to ${config.jwtEndpoint} in project config`);
}

config.setCdnEndpoint(`http://${uriOptions.servers.cdn}/`);
console.log(`set CDN endpoint to ${config.cdnEndpoint} in project config`);

/* APOLLO */
// App & this config are imported prior to creating client and network interface
// in server and browser.js
console.log("creating IntrospectionFragmentMatcher")
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const cache = new InMemoryCache({ fragmentMatcher });

config.setApolloClientOptions({
  cache,
  link: new HttpLink(),
  dataIdFromObject: o => o.id,
});
config.setApolloNetworkOptions({
  credentials: 'same-origin',
});
