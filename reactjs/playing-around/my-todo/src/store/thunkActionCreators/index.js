import { UserActions } from '../UserSlice';

export const logIn = (userInfo) => {
  const { expiresAt } = userInfo;
  const now = Date.now();
  return (dispatch) => {
    if (now >= expiresAt) {
      dispatch(logOut());
    } else {
      dispatch(UserActions.saveUserInfo(userInfo));
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch(UserActions.logout());
    localStorage.removeItem('userInfo');
  };
};
