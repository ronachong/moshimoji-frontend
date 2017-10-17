// ----------------------
// IMPORTS
// Config API for adding reducers and configuring ReactQL app
import config from 'kit/config';

// ----------------------
// SERVER CONFIGURATION

// Set server config, by checking `SERVER` -- this code path will be
// eliminated by Webpack in the browser bundle.

if (SERVER) {
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

  config.set404Handler(ctx => {
    const stateDump = JSON.stringify(ctx.store.getState());
    ctx.status = 404;
    ctx.body = `This route does not exist on the server - Redux dump: ${stateDump}`;
  });

  /* CUSTOM ERROR HANDLER */

  //  where `e` is the error thrown, `ctx` is the Koa context object.
  // not incorporating third-party tools with next() yet.
  // see config/example.js fmi.
  config.setErrorHandler((e, ctx /* `next` is unused in this example */) => {
    // eslint-disable-next-line no-console
    console.log('Error: ', e.message);
    ctx.body = `Some kind of error. Check your source code.\n${e.message}`;
  });

  /* CUSTOM KOA APP INSTANTIATION */

  // config of`app` outside of middleware/routing
  // see config/example.js fmi & examples.
  config.getKoaApp(app => {
    // add new `engine` key to the app.context` prototype; used by middleware
    // below to set a `Powered-By` header.
    // eslint-disable-next-line no-param-reassign
    app.context.engine = 'ReactQL';
  });

  /* CUSTOM MIDDLEWARE */

  // Custom middleware to be processed on the server.
  config.addMiddleware(async (ctx, next) => {
    // custom header
    ctx.set('Powered-By', ctx.engine); // <-- `ctx.engine` srt above!

    // Redux action to manipulate the state on the server side.
    ctx.store.dispatch({ type: 'INCREMENT_COUNTER' });

    // Always return `next()`, otherwise the request won't 'pass' to the next
    // middleware in the stack (likely, the React handler)
    return next();
  });
}
