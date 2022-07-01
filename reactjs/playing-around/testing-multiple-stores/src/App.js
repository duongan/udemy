// import { useContext, useEffect } from 'react';
// import { useSelector, useStore, useDispatch, connect } from 'react-redux';
// import Todos from './components/Todos';
// import './App.css';
// import { contextA, contextB } from './contexts';
// import NewTodo from './components/NewTodo';
import TodosPage from './pages/TodosPage';
import UsersPage from './pages/UsersPage';

function App() {
  // const dispatch = useDispatch();
  // const store = useStore();
  // console.log(store.getState())
  // const state = useSelector((state) => state);
  // console.log(state)
  // const ctxA = useContext(contextA);
  // const ctxB = useContext(contextB)

  // console.log(ctxA)
  // console.log(ctxB.store.getState())

  // const { todos } = ctxA.store.getState();

  // useEffect(() => {
  //   console.log(ctxA);
  // }, [ctxA]);
  return (
    <div className="App">
      <h1>TODOS</h1>
      <TodosPage />
      <UsersPage />
    </div>
  );
}

export default App;

// const mapState = (state) => {
//   console.log('mapState', state);
//   return {
//     todos: state.todos,
//   };
// };

// export default connect(mapState, null, null, { context: contextA })(App);
