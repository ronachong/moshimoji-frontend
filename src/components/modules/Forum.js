import React from 'react';

import config from 'kit/config';

import { css, withStyles } from 'src/styles';

// TODO: implement ModuleContainer
// import { ModuleContainer } from 'src/components/base';

const forumStyles = ({}) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '70%'
  },

  iframe: {
    height: '700px', // TODO: get child to inherit proper height from parent instead
  },
});

const Forum = ({ styles }) => (
  <div {...css(styles.container)}>
    <h2>Forum module</h2>
    <iframe
      src={config.forumEndpoint}
      {...css(styles.iframe)}>
    </iframe>
  </div>
);

export default withStyles(forumStyles)(Forum);
