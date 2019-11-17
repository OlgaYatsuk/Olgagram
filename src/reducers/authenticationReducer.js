// @flow

const initialValue = {
  phoneNumber: '',
  password: '',
};

export const authenticationReducer = (
  state: {
    phoneNumber: string,
    password: string,
  } = initialValue,
  action: {
    type: string,
    payload: {
      phoneNumber: string,
      password: string,
    },
  },
) => {
  switch (action.type) {
    case 'AUTHENTICATION_STATUS_REQUEST':
      return {
        ...state,
        isLoading: true,
        requestStatus: 'request'
      };

    case 'AUTHENTICATION_STATUS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuthenticationFailed: false,
        requestStatus: 'success',
      };

    case 'AUTHENTICATION_STATUS_FAILURE':
      return {
        ...state,
        isLoading: false,
        isAuthenticationFailed: true,
        requestStatus: 'failure'
      };

    default:
      return state;
  }
};
