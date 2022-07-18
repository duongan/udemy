import { createSlice } from '@reduxjs/toolkit';

const TodoSlice = createSlice({
  name: 'Todo Slice',
  initialState: {
    todos: [],
  },
  reducers: {
    loadTodoList: (state, action) => {
      state.todos = action.payload;
    },
    add: (state, action) => {
      const existingTask = state.todos.find(
        (item) => item.id === action.payload.id
      );
      if (!existingTask) {
        state.todos.push({ ...action.payload });
      }
    },
    update: (state, action) => {
      const idx = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log('UPDATE', idx, action);
      if (idx > -1) {
        state.todos[idx].isDone = action.payload.isDone;
      }
    },
    remove: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const todoActions = TodoSlice.actions;

export default TodoSlice;
