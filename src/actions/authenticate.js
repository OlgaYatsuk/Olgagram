// @flow

import {authenticationService} from '../services/authenticationService';

export const authenticate = (phone: string, password: string) => (
  dispatch: ({type: string}) => void,
) => {
  dispatch({type: 'AUTHENTICATION_STATUS_REQUEST'});

  return authenticationService(phone, password)
    .then(() => {
        dispatch({
          type: 'AUTHENTICATION_STATUS_SUCCESS',
        });
    })

    .catch(err => {
      dispatch({type: 'AUTHENTICATION_STATUS_FAILURE', err});
    });
};
