import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Login from './pages/Login';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="./" />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" />
      </Routes>
    </Layout>
  );
}

export default App;
