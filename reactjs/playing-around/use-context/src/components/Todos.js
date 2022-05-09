import { useContext } from 'react';

import Todo from './Todo';
import { TodosContext } from '../context/todos-context';
import classes from './Todos.module.css';

function Todos(props) {
  console.log('TODOS LIST RENDERING');
  const todoCtx = useContext(TodosContext);

  return (
    <div className={classes.todos}>
      <ul>
        {todoCtx.todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
