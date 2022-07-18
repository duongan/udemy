export const validateEmail = (email = '') => {
  if (email === '') {
    return { message: 'Email is required.', field: 'email' };
  }
  if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)) {
    return { message: 'Email is invalid.', field: 'email' };
  }
  return null;
};

export const validatePassword = (password = '') => {
  if (password === '') {
    return { message: 'Password is required.', field: 'password' };
  }
  if (password.length < 6) {
    return {
      message: 'Password must be more than 5 characters.',
      field: 'password',
    };
  }
  return null;
};
