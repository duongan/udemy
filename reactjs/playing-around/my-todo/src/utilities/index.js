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

export const validateRepassword = (repassword = '', password = '') => {
  if (repassword === '') {
    return { message: 'Re-password is required.', field: 're-password' };
  }
  if (repassword.length < 6) {
    return {
      message: 'Re-password must be more than 5 characters.',
      field: 're-password',
    };
  }
  if (repassword !== password) {
    return {
      message: 'Re-password does not match.',
      field: 're-password',
    };
  }
  return null;
};
