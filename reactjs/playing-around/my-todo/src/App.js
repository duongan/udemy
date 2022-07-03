import { Provider } from 'react-redux';
import { Layout } from './components';
import Home from './pages/Home';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Home />
      </Layout>
    </Provider>
  );
}

export default App;
