import fetchUsersService from '../services/fetchUsersService';

export const fetchUsers = () => (dispatch, getState) => {
  // if (getState().usersReducer.isLoading) {
  //   return;
  // }
  dispatch({type: 'FETCH_USERS_REQUEST'});
  fetchUsersService()
    .then(({users}) => {
      dispatch({
        type: 'FETCH_USERS_SUCCESS',
        users: users
      });
    })
    .catch(err => {
      dispatch({
        type: 'FETCH_USERS_FAILURE',
        err,
      });
    });
};
