import styles from './Todo.module.scss';

const Todo = () => {
  return (
    <div className={styles.container}>
      <input type="radio" />
      <span>Task 1</span>
    </div>
  );
};

export default Todo;
