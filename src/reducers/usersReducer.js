const initialState = {
  isLoading: false,
  users: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        isLoading: true
      };

    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        users: action.users,
      };

    case 'FETCH_USERS_FAILURE':
      return {
        ...state,
        isLoading: false,
        err: action.err
      };

    default:
      return state;
  }
};
