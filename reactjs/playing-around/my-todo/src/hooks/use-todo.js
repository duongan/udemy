import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../store/TodoSlice';
import useHttp from './use-http';
import { API_URL } from '../constants';

const useTodo = () => {
  console.log('--useTodo--');
  const dispatch = useDispatch();
  const { sendRequest, isLoaded } = useHttp();
  const todoList = useSelector((state) => state.todo.todos);
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (isLoaded) {
      return;
    }
    const transformData = (responsedData) => {
      const loadedTodos = [];
      for (const key in responsedData) {
        loadedTodos.push({
          id: key,
          name: responsedData[key].text,
          isDone: responsedData[key].done || false,
        });
      }
      dispatch(todoActions.loadTodoList(loadedTodos));
    };
    const requestConfig = {
      url: `${API_URL}/tasks/${userInfo.localId}.json?auth=${userInfo.idToken}`,
    };
    sendRequest(requestConfig, transformData);
  }, [sendRequest, isLoaded, dispatch, userInfo]);

  return {
    todoList,
  };
};

export default useTodo;
