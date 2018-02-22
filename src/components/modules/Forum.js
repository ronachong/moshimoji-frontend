// ----------------------
// IMPORTS

/* NPM */
import React from 'react';

/* Moshimoji */
// kit
import config from 'kit/config';

// styles
import { css } from 'src/styles';

// higher order components
import { Module } from 'src/components/base';


// ----------------------
// COMPONENT CODE

/* COMPONENT: Forum
 *  Forum specifies the contents for the Forum module and gets passed to Module
 *  Input:
 *  + props
 *    + styles - object containing styles for ForumContents children; equivalent
 *      to ForumContents.styles; from Module HOC
 */
// TODO: add prop types
const ForumContents = ({ styles }) => (
  <iframe
    title="moshimoji forum"
    src={config.forumEndpoint}
    {...css(styles.iframe)} />
);

ForumContents.title = 'Forum';

ForumContents.styles = {
  iframe: {
    height: '700px', // TODO: get child to inherit proper height from parent instead
  },
};

export default Module(ForumContents);
