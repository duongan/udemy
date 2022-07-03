import { useDispatch } from 'react-redux';
import { todoActions } from '../../store/TodoSlice';
import styles from './Todo.module.scss';

const Todo = (props) => {
  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    e.preventDefault();
    console.log(props);
    dispatch(todoActions.remove(props.id));
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
