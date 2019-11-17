/* eslint-disable no-alert */
// @flow

const callApi = (password, phoneNumber): Promise<any> => {
  return new Promise((resolve, reject) => {
    const err = phoneNumber.length < 3 || password.length < 3;
    const response = () => {
      err ? reject(err) : resolve();
    };

    setTimeout(() => response(), 1000);
  });
};

export const authenticationService = (phoneNumber: string, password: string) => {
  return callApi(phoneNumber, password);
};

