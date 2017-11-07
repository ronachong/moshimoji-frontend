import React from 'react';
import { gql, graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import fragments from 'src/graphql/fragments';
import { userStatusesContainerQuery } from 'src/components/modules/dashboard/ApolloUserStatusesContainer';

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
        query: userStatusesContainerQuery,
        variables: { cursor: null },
      }],
    })
      .then(res => {
        console.log('Res:', res);
        console.log(res.data.createUserStatus.reqStatus);
        if (res.data.createUserStatus.reqStatus === 200) {
          console.log('status submitted successfully');
        }
      })
      .catch(err => {
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

let ApolloUserStatusForm = graphql(userStatusFormQuery)(UserStatusForm);
ApolloUserStatusForm = graphql(userStatusFormMutation)(ApolloUserStatusForm);

export default ApolloUserStatusForm;
