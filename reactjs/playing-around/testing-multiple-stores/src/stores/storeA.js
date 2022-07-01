import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  store: 'A',
  todos: [{ taskName: 'Task 1' }],
};

const reducer = (state, action) => {
  if (action.type === 'ADD_TASK') {
    return {
      ...state,
      todos: [...state.todos, { taskName: action.payload }],
    };
  }
  return initialState;
};

export const storeA = configureStore({ reducer });
