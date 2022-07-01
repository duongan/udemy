import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  store: 'B',
  users: [{ name: 'An Duong', email: 'an.duong@gmail.com' }],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, { ...action.payload }],
      };
    default:
      return initialState;
  }
};

export const storeB = configureStore({ reducer });
// export default createStore(reducer);
