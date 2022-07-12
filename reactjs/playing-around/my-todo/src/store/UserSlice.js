import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState: {
    isLogged: false,
    userInfo: null,
  },
  reducers: {
    saveUserInfo: (state, action) => {
      const { payload } = action;
      state.userInfo = payload;
      state.isLogged = true;
    },
    logout: (state) => {
      state.userInfo = null;
      state.isLogged = false;
    },
  },
});

export const UserActions = UserSlice.actions;
export default UserSlice;
