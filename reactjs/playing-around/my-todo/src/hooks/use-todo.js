import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../store/TodoSlice';
import useHttp from './use-http';
import { API_URL } from '../constants';

const useTodo = () => {
  console.log('--useTodo--');
  const dispatch = useDispatch();
  const { sendRequest, isLoaded } = useHttp();
  const todoList = useSelector((state) => state.todos);

  useEffect(() => {
    if (isLoaded) {
      return;
    }
    const transformData = (responsedData) => {
      const loadedTodos = [];
      for (const key in responsedData) {
        loadedTodos.push({ id: key, name: responsedData[key].text });
      }
      dispatch(todoActions.loadTodoList(loadedTodos));
    };
    const requestConfig = {
      url: `${API_URL}/tasks.json`,
    };
    sendRequest(requestConfig, transformData);
  }, [sendRequest, isLoaded, dispatch]);

  return {
    todoList,
  };
};

export default useTodo;
