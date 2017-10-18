import React from 'react';
import { Link } from 'react-router-dom';

// <LinkOrButton displayComponent={const} onClick= />
const LinkOrButton = ({ DisplayComponent, isLink, propsToPass }) => {
  if (isLink) {
    const { uri, otherProps } = propsToPass;
    return <Link to={uri}><DisplayComponent props={otherProps} /></Link>;
  }

  const { onClick, otherProps } = propsToPass;
  console.log('LinkOrButton');
  console.log(onClick);
  console.log(propsToPass);
  return <DisplayComponent onClick={onClick} props={otherProps} />;
};

export default LinkOrButton;
