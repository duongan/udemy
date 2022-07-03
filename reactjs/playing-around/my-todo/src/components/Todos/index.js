import Todo from '../Todo';
import styles from './Todos.module.scss';

const Todos = (props) => {
  return (
    <div className={styles.container}>
      {props.items.map((task) => (
        <Todo key={task.id} {...task} />
      ))}
    </div>
  );
};

export default Todos;
