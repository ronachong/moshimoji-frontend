/* eslint-disable no-console */

// Production server entry point.  Spawns the server on default HOST:PORT

// ----------------------
// IMPORTS

/* Node */

import path from 'path';

// Needed to read manifest files
import { readFileSync } from 'fs';

/* Local */

// Import paths.  We'll use this to figure out where our public folder is
// so we can serve static files
import PATHS from 'config/paths';

// Import console messages
import { logServerStarted } from 'kit/lib/console';

// Extend the server base
import server, { createReactHandler, staticMiddleware } from './server';

// ----------------------

// Read in manifest files
  const [manifest, chunkManifest] = ['manifest', 'chunk-manifest'].map(
    name => {
      const file = path.resolve(PATHS.dist, `${name}.json`);
      try {
        return JSON.parse(readFileSync(file, 'utf8'),)
      } catch (err) {
        if (err.code === 'ENOENT') {
          console.log(`Error reading ${file} manifest:\n`, err.message);
          console.log('If this is for chunk-manifest.json, it probably means no chunking was used to split app into several bundles.')
          console.log('Defaulting to empty {} for manifest.')
          return {}
        } else {
          throw err;
        }
      }
    },
  );

// Get manifest values
const nonAphroditeCss = manifest['browser.css'];
const scripts = [
  'manifest.js',
  'vendor.js',
  'browser.js'].map(key => manifest[key]);

// Spawn the development server.
// Runs inside an immediate `async` block, to await listening on ports
(async () => {
  const { app, router, listen } = server;

  // Connect the production routes to the server
  router.get('/*', createReactHandler(nonAphroditeCss, scripts, chunkManifest));
  app
    .use(staticMiddleware())
    .use(router.routes())
    .use(router.allowedMethods());

  // Spawn the server
  listen();

  // Log to the terminal that we're ready for action
  logServerStarted({
    type: 'server',
  });
})();
