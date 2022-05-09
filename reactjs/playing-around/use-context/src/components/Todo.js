import React, { useContext } from 'react';

import { TodosContext } from '../context/todos-context';
import classes from './Todo.module.css';

function Todo(props) {
  console.log('TODO RENDERING');

  const todosCtx = useContext(TodosContext);

  const onDeleteHandler = (event) => {
    todosCtx.deleteTodo(props.id);
  };

  return (
    <li className={classes.todo}>
      <p className={classes.title}>{props.title}</p>
      <p>{props.description}</p>
      <button onClick={onDeleteHandler}>Delete</button>
    </li>
  );
}

export default Todo;
