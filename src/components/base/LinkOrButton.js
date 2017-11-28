// ----------------------
// IMPORTS

/* NPM */
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';


// ----------------------
// COMPONENT: LinkOrButton
// LinkOrButton is a base component that behaves either as a link or a button
// depending on isLink prop.
const LinkOrButton = ({ DisplayComponent, isLink, onClick, uri }) => {
  if (isLink) {
    return <Link to={uri}><DisplayComponent /></Link>;
  }
  return <DisplayComponent onClick={onClick} />;
};

LinkOrButton.propTypes = {
  DisplayComponent: PropTypes.func.isRequired,
  isLink: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  uri: PropTypes.string,
};

export default LinkOrButton;
