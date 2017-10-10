import os
import config from 'kit/config';

if (process.env.ENV == 'local_dev')
  config.setGraphQLEndpoint('http://127.0.0.1:8000');

# TODO: add logic to determine graphql endpoint in docker for aws swarm
