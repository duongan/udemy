import useTodo from '../../hooks/use-todo';
import { Todos } from '../../components';
import AddTodo from '../../components/AddTodo';
import styles from './Home.module.scss';

const Home = () => {
  // console.log('Home RENDERING!!!');
  const { todoList } = useTodo();

  return (
    <div className={styles.container}>
      <AddTodo />
      <Todos items={todoList} />
    </div>
  );
};

export default Home;
