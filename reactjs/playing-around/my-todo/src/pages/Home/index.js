import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useHttp from '../../hooks/useHttp';
import { Todos } from '../../components';
import AddTodo from '../../components/AddTodo';
import { todoActions } from '../../store/TodoSlice';
import { API_URL } from '../../constants';
import styles from './Home.module.scss';

const Home = () => {
  console.log('Home RENDERING!!!');
  const [todos, setTodos] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const dispatch = useDispatch();
  const storedTodos = useSelector((state) => state.todos);
  const { sendRequest } = useHttp();

  useEffect(() => {
    if (isDataLoaded) {
      setTodos(storedTodos);
      return;
    }

    const transformData = (responsedData) => {
      const loadedTodos = [];
      for (const key in responsedData) {
        loadedTodos.push({ id: key, name: responsedData[key].text });
      }
      dispatch(todoActions.loadTodoList(loadedTodos));
      setIsDataLoaded(true);
      setTodos(loadedTodos);
    };
    const requestConfig = {
      url: `${API_URL}/tasks.json`,
    };
    sendRequest(requestConfig, transformData);
  }, [
    sendRequest,
    dispatch,
    setTodos,
    isDataLoaded,
    setIsDataLoaded,
    storedTodos,
  ]);

  return (
    <div className={styles.container}>
      <AddTodo />
      <Todos items={todos} />
    </div>
  );
};

export default Home;
