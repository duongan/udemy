export const API_URL =
  'https://react-http-3b4e8-default-rtdb.asia-southeast1.firebasedatabase.app';

export const INVALID_EMAIL_CODE = 'auth/invalid-email';
export const INVALID_PASSWORD_CODE = 'auth/wrong-password';
export const USER_NOT_FOUND_CODE = 'auth/user-not-found';

export const AUTH_ERROR_MESSAGE = {
  [INVALID_EMAIL_CODE]: 'Email does not exist.',
  [INVALID_PASSWORD_CODE]: 'Password is not correct.',
  [USER_NOT_FOUND_CODE]: 'Email does not exist.',
};
