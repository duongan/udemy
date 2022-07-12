import useTodo from '../../hooks/use-todo';
import { Todos } from '../../components';
import AddTodo from '../../components/AddTodo';
import styles from './Home.module.scss';

const Home = () => {
  const { todoList } = useTodo();
  // console.log('Home Page', todoList);

  return (
    <div className={styles.container}>
      <AddTodo />
      <Todos items={todoList} />
    </div>
  );
};

export default Home;
