import Todo from '../Todo';
import styles from './Todos.module.scss';

const data = [
  { id: 1, name: 'Task 1' },
  { id: 2, name: 'Task 2' },
];

const Todos = () => {
  return (
    <div className={styles.container}>
      {data.map((task) => (
        <Todo key={task.id} {...task} />
      ))}
    </div>
  );
};

export default Todos;
