// ----------------------
// IMPORTS

/* NPM */
import PropTypes from 'prop-types';
import React from 'react';
import { gql, graphql } from 'react-apollo';

/* Moshimoji */
// GraphQL
import fragments from 'src/graphql/fragments';

// child components
import { userStatusesFeedQuery } from 'src/components/modules/dashboard/ApolloUserStatusesFeed';

// ----------------------
// COMPONENT CODE

const userStatusFormMutation = gql`
  mutation UserStatusForm($text: String!) {
    createUserStatus(text: $text) {
      reqStatus,
      formErrors,
      userStatus {
        ...UserStatusForList
      }
    }
  }
  ${fragments.userStatusForList}
`;

const userStatusFormQuery = gql`
{
  currentUser {
    id
  }
}
`;

/* COMPONENT: UserStatusForm
 *  UserStatusForm is a pre-Apollo form component to submit a new user status
 *  Input:
 *  + props
 *    + mutate - action to send mutation to GraphQL endpoint; from Apollo HOC
 */
// TODO: consider using update instead of refetch to update cache
const UserStatusForm = ({ mutate }) => {
  let form = null;
  const handleSubmit = e => {
    e.preventDefault();
    const status = new FormData(form);
    mutate({
      mutation: userStatusFormMutation,
      variables: { text: status.get('text') },
      refetchQueries: [{
        query: userStatusesFeedQuery,
        variables: { cursor: null },
      }],
    })
      .then(res => {
        // eslint-disable-next-line no-console
        console.log('Res:', res);
        // eslint-disable-next-line no-console
        console.log(res.data.createUserStatus.reqStatus);
        if (res.data.createUserStatus.reqStatus === 200) {
          // eslint-disable-next-line no-console
          console.log('status submitted successfully');
        }
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(`Network error: ${err}`);
      });
  };

  return (
    <div>
      <h3>Update your status</h3>
      <form
        ref={ref => { form = ref; }}
        onSubmit={e => handleSubmit(e)} >
        <div>
          <textarea name="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

UserStatusForm.propTypes = {
  mutate: PropTypes.func.isRequired,
};

/* COMPONENT: ApolloUserStatusForm
 * ApolloUserStatusForm renders a form to submit a user status.
 */
const ApolloUserStatusForm = graphql(userStatusFormMutation)(
  graphql(userStatusFormQuery)(UserStatusForm));

export default ApolloUserStatusForm;
