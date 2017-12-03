// ----------------------
// IMPORTS

/* NPM */
import React from 'react';

/* Moshimoji */
// kit
import config from 'kit/config';

// styles
import { css, withStyles } from 'src/styles';

// higher order components
import { Module } from 'src/components/base'


// ----------------------
// COMPONENT CODE
/* COMPONENT: Forum */
// Forum specifies the contents for the Forum module and gets passed to Module
const Forum = ({ styles }) => (
  <iframe
    src={config.forumEndpoint}
    {...css(styles.iframe)}>
  </iframe>
);

Forum.title = 'Forum';

Forum.styles = {
  iframe : {
    height: '700px', // TODO: get child to inherit proper height from parent instead
  },
};

export default Module(Forum);
