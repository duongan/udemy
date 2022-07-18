import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../constants';
import useHttp from '../../hooks/use-http';
import { todoActions } from '../../store/TodoSlice';
import Modal from '../Modal';
import styles from './Todo.module.scss';

const Todo = (props) => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  const { sendRequest } = useHttp();
  const { userInfo } = useSelector((state) => state.user);

  const deleteHandler = (e) => {
    e.preventDefault();
    setIsShow(true);
  };

  const deleteTodo = () => {
    console.log('Delete Task', props);
    const requestConfig = {
      url: `${API_URL}/tasks/${userInfo.localId}/${props.id}.json?auth=${userInfo.idToken}`,
      method: 'DELETE',
    };
    sendRequest(requestConfig, () => {
      dispatch(todoActions.remove(props.id));
    });
  };

  const closeModalHandler = () => {
    setIsShow(false);
  };

  return (
    <div className={styles.container}>
      {isShow && <Modal onClose={closeModalHandler} onOk={deleteTodo} />}
      <input type="radio" />
      <span>{props.name}</span>
      <a href="/" onClick={deleteHandler}>
        Delete
      </a>
    </div>
  );
};

export default Todo;
