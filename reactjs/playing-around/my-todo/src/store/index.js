import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './UserSlice';
import TodoSlice from './TodoSlice';

const store = configureStore({
  reducer: { user: UserSlice.reducer, todo: TodoSlice.reducer },
});

export default store;
