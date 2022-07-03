import { useSelector } from 'react-redux';
import { Todos } from '../../components';
// import { todoSlice } from '../../store';
import styles from './Home.module.scss';

const Home = () => {
  const todos = useSelector((state) => state.todos);
  // const dispatch = useDispatch();

  // const addTodoHandler = () => {
  //   const id = Date.now().toString();
  //   const action = todoSlice.actions.add({ id, name: `Task ${id}` });
  //   dispatch(action);
  // };

  return (
    <div className={styles.container}>
      {/* <button onClick={addTodoHandler}>Add</button> */}
      <Todos items={todos} />
    </div>
  );
};

export default Home;
