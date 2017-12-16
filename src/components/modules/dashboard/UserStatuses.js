// ----------------------
// IMPORTS

/* NPM */
import PropTypes from 'prop-types';
import React from 'react';

// ----------------------
// COMPONENT CODE

/* COMPONENT: UserStatuses
 *  UserStatuses is a presentational component for user statuses.
 *  Input:
 *  + props
 *    + userStatusEdges - objects representing user status edges
 */
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
