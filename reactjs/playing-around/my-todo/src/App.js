import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import RootPage from './pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <RootPage />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
