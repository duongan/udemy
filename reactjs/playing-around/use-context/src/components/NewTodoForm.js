import { useContext, useRef } from 'react';

import { TodosContext } from '../context/todos-context';
import classes from './NewTodoForm.module.css';

const NewTodoForm = (props) => {
  const todosCtx = useContext(TodosContext);

  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const onAddTodoHandler = (event) => {
    event.preventDefault();

    const newTodo = {
      title: titleInputRef.current.value,
      description: descriptionInputRef.current.value,
    };

    todosCtx.addTodo(newTodo);
  };

  return (
    <form className={classes.form} onSubmit={onAddTodoHandler}>
      <div className={classes.controls}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleInputRef} />
      </div>
      <div className={classes.controls}>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" ref={descriptionInputRef} />
      </div>
      <button>Add</button>
    </form>
  );
};

export default NewTodoForm;
