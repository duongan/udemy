import { createSlice } from '@reduxjs/toolkit';

const TodoSlice = createSlice({
  name: 'Todo Slice',
  initialState: {
    todos: [],
  },
  reducers: {
    add: (state, action) => {
      state.todos.push({ id: Date.now().toString(), ...action.payload });
    },
    remove: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const todoActions = TodoSlice.actions;

export default TodoSlice;
