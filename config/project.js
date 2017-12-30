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
console.log('process.env for node process:\n', process.env);

/* BACKEND */
const uriOptions = {
  servers: {
    development: '127.0.0.1:8000',
    stage: 'stage.moshi-moji.xyz:8000',
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
// For distinction between NODE_ENV prod and prod environment:
// https://paper.dropbox.com/doc/travailsvictory-log-in-dev-stuff-urw9F3oeUadSzjULXWYiM#:h2=4:30-pm
// TODO: make a function that formats args into https uri string
// TODO: split into function calls for each env scenario (make code more readable)
// something like setEndpoints(process.env.NODE_ENV) if NODE_ENV == 'development'
// else setEndpoints(process.env.PROD_TYPE)
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
} else if (process.env.STAGE) {
  config.setGraphQLEndpoint(
    `http://${uriOptions.servers.stage}/${uriOptions.slugs.graphql}/`
  );
  config.setJwtEndpoint(
    `http://${uriOptions.servers.stage}/${uriOptions.slugs.jwtRetrieve}/`
  );
  config.setForumEndpoint(
    `http://${uriOptions.servers.stage}/${uriOptions.slugs.forum}/`
  );
}
// TODO: add block for PROD_TYPE == 'production'
// eslint-disable-next-line no-console
config.setCdnEndpoint(`http://${uriOptions.servers.cdn}/`);
// eslint-disable-next-line no-console
console.log(`set graphql endpoint to ${config.graphQLEndpoint} in project config`);
// eslint-disable-next-line no-console
console.log(`set endpoint to retrieve jwt to ${config.jwtEndpoint} in project config`);
// eslint-disable-next-line no-console
console.log(`set endpoint to retrieve forum to ${config.forumEndpoint} in project config`);
// eslint-disable-next-line no-console
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
