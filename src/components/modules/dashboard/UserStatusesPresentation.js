import React from 'react';
import PropTypes from 'prop-types';

const UserStatusesPresentation = ({ userStatusEdges }) => (
  <div>
    {userStatusEdges.map(userStatus => (
      <p key={userStatus.node.id}>
        '{userStatus.node.text}' created {userStatus.node.creationDate}
      </p>
    ))}
  </div>
);

UserStatusesPresentation.propTypes = {
  userStatusEdges: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      id: PropTypes.string.isRequired,
      creationDate: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired).isRequired,
};

export default UserStatusesPresentation;
