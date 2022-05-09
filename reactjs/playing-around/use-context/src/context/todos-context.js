import React, { useState } from 'react';

export const TodosContext = React.createContext({
  todos: [],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
});

const TodosContextProvider = (props) => {
  console.log('TODOS-CONTEXT-PROVIDER RENDERING');
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    console.log('addTodo', todo);
    setTodos((prevTodos) => {
      const newTodo = {
        id: Date.now().toString(),
        ...todo,
      };
      return [...prevTodos, newTodo];
    });
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const context = {
    todos,
    addTodo,
    deleteTodo,
  };

  return (
    <TodosContext.Provider value={context}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
