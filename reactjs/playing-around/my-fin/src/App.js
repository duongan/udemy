import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import { Home, Login, NotFound } from './pages';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
