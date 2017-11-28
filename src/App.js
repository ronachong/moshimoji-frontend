// Aapp's entry point.  Every ReactQL projects requires 'src/App.js',
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

import Main from 'src/components/main';

// Init config
import 'src/reducers';
import 'config/project';
import 'config/server';
import 'config/browser';

// Init global styles.  These will be added to the resulting CSS automatically
// without any class hashing.  Use this to include default or framework CSS.
import './styles.global.css';

// ----------------------
// export the root component we want to mount as the starting point to our app.
export default Main;
