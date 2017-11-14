// ----------------------
// IMPORTS

/* NPM */
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

export default LinkOrButton;
