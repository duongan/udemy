import { useState, useRef, useContext } from 'react';
import { contextA } from '../../contexts';

const NewTodo = () => {
  const ctxA = useContext(contextA);
  const inputRef = useRef();

  // const [taskName, setTaskName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // setTaskName(inputRef.current.value);
    ctxA.store.dispatch({ type: 'ADD_TASK', payload: inputRef.current.value });
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="task-name">Task Name</label>
        <input id="task-name" type="text" ref={inputRef} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default NewTodo;
