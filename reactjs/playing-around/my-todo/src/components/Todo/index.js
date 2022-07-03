import { useDispatch } from 'react-redux';
import { API_URL } from '../../constants';
import useHttp from '../../hooks/useHttp';
import { todoActions } from '../../store/TodoSlice';
import styles from './Todo.module.scss';

const Todo = (props) => {
  const dispatch = useDispatch();
  const { sendRequest } = useHttp();

  const deleteHandler = (e) => {
    e.preventDefault();
    console.log('Delete Task', props);
    const requestConfig = {
      url: `${API_URL}/tasks/${props.id}.json`,
      method: 'DELETE',
    };
    sendRequest(requestConfig, () => {
      dispatch(todoActions.remove(props.id));
    });
  };

  return (
    <div className={styles.container}>
      <input type="radio" />
      <span>{props.name}</span>
      <a href="/" onClick={deleteHandler}>
        Delete
      </a>
    </div>
  );
};

export default Todo;
