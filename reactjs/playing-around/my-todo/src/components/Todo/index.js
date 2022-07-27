import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { API_URL } from '../../constants';
import useHttp from '../../hooks/use-http';
import { todoActions } from '../../store/TodoSlice';
import ConfirmDeleteModal from '../ConfirmDeleteModal';
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

  const markAsDoneHandler = (e) => {
    e.preventDefault();
    const { id, name } = props;
    const requestConfig = {
      url: `${API_URL}/tasks/${userInfo.localId}/${id}.json?auth=${userInfo.idToken}`,
      method: 'PUT',
      data: { text: name, done: true, updatedDate: Date.now() },
    };
    sendRequest(requestConfig, () => {
      dispatch(todoActions.update({ id, name, isDone: true }));
    });
  };

  const deleteTodo = () => {
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

  const modalProps = {
    onClose: closeModalHandler,
    onOk: deleteTodo,
    title: 'Warning',
    message: 'Are you sure you want to delete it?',
  };

  return (
    <div className={styles.container}>
      {isShow && <ConfirmDeleteModal {...modalProps} />}
      <input type="radio" />
      <span>{props.name}</span>
      {props.isDone && <span className={styles.completedLabel}>Done</span>}
      {!props.isDone && (
        <a
          className={styles.markAsDoneBtn}
          href="/"
          onClick={markAsDoneHandler}
        >
          Mark as done
        </a>
      )}
      <a className={styles.deleteBtn} href="/" onClick={deleteHandler}>
        <FontAwesomeIcon icon={faTrashCan} />
      </a>
    </div>
  );
};

export default Todo;
