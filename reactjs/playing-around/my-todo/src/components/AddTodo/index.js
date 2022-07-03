import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../store/TodoSlice';
import styles from './AddTodo.module.scss';

const AddTodo = () => {
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState('');

  const taskNameChangeHandler = (e) => {
    const { value } = e.target;
    setTaskName(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!taskName) {
      return;
    }
    dispatch(todoActions.add({ name: taskName }));
    setTaskName('');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <input
          placeholder="New task..."
          name="task_name"
          type="text"
          value={taskName}
          onChange={taskNameChangeHandler}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default AddTodo;
