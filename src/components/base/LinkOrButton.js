// ----------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';


const LinkOrButton = ({ DisplayComponent, isLink, onClick, uri }) => {
  if (isLink) {
    return <Link to={uri}><DisplayComponent /></Link>;
  }
  return <DisplayComponent onClick={onClick} />;
};

export default LinkOrButton;
