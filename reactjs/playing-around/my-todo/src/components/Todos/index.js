import PropTypes from 'prop-types';
import Todo from '../Todo';
import styles from './Todos.module.scss';

const Todos = (props) => {
  const { items = [] } = props;

  const renderEmpty = () => {
    return <div className={styles.emptyList}>No tasks</div>;
  };

  const renderList = () => {
    return items.map((task) => <Todo key={task.id} {...task} />);
  };

  return (
    <div className={styles.container}>
      <h3>Tasks</h3>
      {items.length ? renderList() : renderEmpty()}
    </div>
  );
};

Todos.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Todos;
