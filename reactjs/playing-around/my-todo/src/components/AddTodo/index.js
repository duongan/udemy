import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../constants';
import useHttp from '../../hooks/use-http';
import { todoActions } from '../../store/TodoSlice';
import styles from './AddTodo.module.scss';

const AddTodo = () => {
  const dispatch = useDispatch();
  const { sendRequest } = useHttp();

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
    sendRequest(
      {
        url: `${API_URL}/tasks.json`,
        method: 'POST',
        data: { text: taskName },
      },
      (responsedData) => {
        console.log('responsedData', responsedData);
        dispatch(todoActions.add({ name: taskName, id: responsedData.name }));
      }
    );
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
