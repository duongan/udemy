import NewTodoForm from './components/NewTodoForm';
import Todos from './components/Todos';
import TodosContextProvider from './context/todos-context';

function App() {
  console.log('APP RENDERING');
  return (
    <TodosContextProvider>
      <NewTodoForm />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
