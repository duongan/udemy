import { configureStore, createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    add: (state, action) => {
      state.todos.push({ ...action.payload });
    },
    remove: (state, action) => {
      state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

console.log(todoSlice);
export { todoSlice };

const store = configureStore({ reducer: todoSlice.reducer });

export default store;
