import styles from './Todo.module.scss';

const Todo = (props) => {
  return (
    <div className={styles.container}>
      <input type="radio" />
      <span>{props.name}</span>
    </div>
  );
};

export default Todo;
