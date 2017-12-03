// ----------------------
// IMPORTS

/* NPM */
import PropTypes from 'prop-types';
import React from 'react';

/* Moshimoji */
// styles
import { css, withStyles } from 'src/styles';


// ----------------------
// COMPONENT: Module
// Module is an HOC that expects a presentational component with styles & title
// attributes to render as the module contents, and provides the styles for the
// surrounding div.
const Module = ModuleContents => {
  const moduleContainerStyles = () => ({
    ...ModuleContents.styles,
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '70%',
      borderStyle: 'solid',
    },
  });

  const ModuleContainer = ({ styles }) => (
    <div {...css(styles.container)} >
      <h2>{ModuleContents.title} module</h2>
      <ModuleContents styles={styles} />
    </div>
  );

  // TODO: add prop types
  ModuleContainer.propTypes = {
  };

  return (
    withStyles(moduleContainerStyles)(ModuleContainer)
  );
};

export default Module;
