// ----------------------
// IMPORTS

/* NPM */
import PropTypes from 'prop-types';
import React from 'react';

// ----------------------
// COMPONENT: UserStatuses
// UserStatuses is a presentational component for user statuses.
const UserStatuses = ({ userStatusEdges }) => (
  <div>
    {userStatusEdges.map(userStatus => (
      <p key={userStatus.node.id}>
        '{userStatus.node.text}' created {userStatus.node.creationDate}
      </p>
    ))}
  </div>
);

UserStatuses.propTypes = {
  userStatusEdges: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      id: PropTypes.string.isRequired,
      creationDate: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired).isRequired,
};

export default UserStatuses;
