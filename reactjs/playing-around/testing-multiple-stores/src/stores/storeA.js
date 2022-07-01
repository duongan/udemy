import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  store: 'A',
  todos: [{ taskName: 'Task 1' }],
};

const reducer = (state, action) => {
  if (action.type === 'ADD_TASK') {
    // let todos = [];
    // for (const item of state.todos) {
    //   todos.push(item);
    // }
    // console.log(todos);
    // todos.push({ taskName: action.payload });
    // console.log(todos);
    // const tmp = [...state.todos];
    // console.log('tmp', tmp);
    // const newState = {
    //   ...state,
    // };
    // newState.todos.push({ taskName: action.payload });
    // console.log(newState);
    const todos = [...state.todos];
    todos.push({ taskName: action.payload });
    console.log(todos);
    return {
      ...state,
      todos,
    };
  }
  return initialState;
};

export default configureStore({ reducer });
