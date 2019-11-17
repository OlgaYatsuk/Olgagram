import fetchChatsService from '../services/fetchChatsService';

export const fetchChats = () => (dispatch, getState) => {
  if (getState().chatsReducer.isLoading) {
    return;
  }

  dispatch({type: 'FETCH_CHATS_REQUEST'});
  fetchChatsService()
    .then(({chats}) => {
      dispatch({
        type: 'FETCH_CHATS_SUCCESS',
        chats: chats
      });
    })
    .catch(err => {
      dispatch({
        type: 'FETCH_CHATS_FAILURE',
        err,
      });
    });
};
