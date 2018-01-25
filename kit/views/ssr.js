/* eslint-disable react/no-danger, no-return-assign, no-param-reassign */

// Component to render the full HTML response in React

// ----------------------
// IMPORTS
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';

// Import Aphrodite StyleSheetServer to gather Aphrodite styles as static asset
// (necessary for SSR, as Aphrodite typically assumes it's being invoked in the
// browser: https://github.com/khan/aphrodite#server-side-rendering)
import { StyleSheetServer } from 'aphrodite';

// ----------------------

/* COMPONENT: Html
 *  HTML renders as the server-side HTML response for moshimoji.
 *  Inputs:
 *  + props
 *    + head
 *    + scripts
 *    + window
 *    + nonAphroditeCSS
 *    + children
 * Implementation note: Html calls renderToString in order to collect the styles
 * specified with Aphrodite using renderStatic--see:
 * https://github.com/khan/aphrodite#server-side-rendering
 * But -- this implementation  means that a React dom render is performed twice
 * (once here, and once in the upper scope). May want to change implementation
 * avoid this in future.
 */
// TODO: see implemntation note above
// TODO: add descriptions for props
const Html = ({ head, scripts, window, nonAphroditeCss, children }) => {
  const { html, css } = StyleSheetServer.renderStatic(() =>
    ReactDOMServer.renderToString(children),
  );

  return (
    <html lang="en" prefix="og: http://ogp.me/ns#">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {head.meta.toComponent()}
        <link rel="stylesheet" href={nonAphroditeCss} />
        <style data-aphrodite>${css.content}</style>
        {head.title.toComponent()}
      </head>
      <body>
        <div
          id="main"
          dangerouslySetInnerHTML={{ __html: html,
          }} />
        <script
          dangerouslySetInnerHTML={{
            __html: Object.keys(window).reduce(
              (out, key) => out += `window.${key}=${JSON.stringify(window[key])};`,
              ''),
          }} />
        <script>
          StyleSheet.rehydrate(${JSON.stringify(css.renderedClassNames)});
        </script>
        {scripts.map(src => <script key={src} src={src} />)}
      </body>
    </html>
  );
};

Html.propTypes = {
  head: PropTypes.object.isRequired,
  window: PropTypes.object.isRequired,
  scripts: PropTypes.arrayOf(PropTypes.string).isRequired,
  nonAphroditeCss: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Html;
