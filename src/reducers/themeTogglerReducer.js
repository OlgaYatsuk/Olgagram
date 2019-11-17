const initialState = {
  chats: []
};

export const themeTogglerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_TO_DARKMODE':
      return {
        ...state,
        theme: action.payload
      };

    case 'SWITCH_TO_LIGHTMODE':
      return {
        ...state,
        theme: action.payload
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
