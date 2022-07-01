import { configureStore, createStore } from '@reduxjs/toolkit';

const initialState = {
  store: 'B',
  users: [{ name: 'an.duong' }],
};

const reducer = (state, action) => {
  return initialState;
};

export default configureStore({ reducer });
// export default createStore(reducer);
