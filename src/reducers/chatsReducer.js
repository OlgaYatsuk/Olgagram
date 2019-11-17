const initialState = {
  chats: []
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CHATS_REQUEST':
      return {
        ...state,
        isLoading: true
      };

    case 'FETCH_CHATS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        chats: action.chats
      };

    case 'FETCH_CHATS_FAILURE':
      return {
        ...state,
        isLoading: false,
        err: action.err
      };

    case 'SEND_MESSAGE':
      const chatToEditIndex = state.chats.findIndex(chat => {
        return (chat.chatId === action.message.chatId)
      });

      return {
        ...state,
        chats: Object.values({...state.chats,  [chatToEditIndex]: {...state.chats[chatToEditIndex], messages: state.chats[chatToEditIndex].messages.concat(action.message)}}),
        isLoading: false,
      };

    default: {

      return {
        ...state
      }
    }
  }
};
