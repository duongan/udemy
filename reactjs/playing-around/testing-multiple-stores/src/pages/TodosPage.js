import { connect } from 'react-redux';
import Todos from '../components/Todos';
import NewToDo from '../components/NewTodo';
import { contextA } from '../contexts';

const TodosPage = (props) => {
  const { todos = [], addTask } = props;
  return (
    <>
      <Todos items={todos} />
      <NewToDo onAdd={addTask} />
    </>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (taskName) => dispatch({ type: 'ADD_TASK', payload: taskName }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  context: contextA,
})(TodosPage);
