import React from 'react';
import LinkOrButton from 'src/components/reused/LinkOrButton';

const DashboardLinkOrButton = ({ currentUser }) => {
  // TODO: consider refactoring this and LinkOrButton; does propsToPass really make sense?
  // or can I simply just pass uri, onclick separately? should the isLink logic be moved elswhere?
  const properties = (currentUser) ?
    {
      isLink: true,
      propsToPass: {
        uri: '/dashboard/site',
      },
    } :
    {
      isLink: false,
      propsToPass: {
        onClick: () => {
          console.log('click 2');
        },
      },
    };

  const DisplayComponent = ({ onClick }) => (
    <button onClick={onClick}>dashboard</button>
  );

  return (
    <LinkOrButton
      DisplayComponent={DisplayComponent}
      isLink={properties.isLink}
      propsToPass={properties.propsToPass} />
  );
};

export default DashboardLinkOrButton;
