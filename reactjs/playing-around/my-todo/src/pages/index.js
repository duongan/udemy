import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Layout } from '../components';
import { UserActions } from '../store/UserSlice';

const Home = React.lazy(() => import('./Home'));
const Login = React.lazy(() => import('./Login'));

const RootPage = () => {
  console.log('Root Page...');
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      dispatch(UserActions.saveUserInfo(userInfo));
    } else if (!isLogged) {
      navigate('/login');
    } else {
      navigate('/');
    }
  }, [isLogged, navigate, dispatch]);

  const fallbackEl = <div className="centered">Loadding...</div>;

  return (
    <Layout>
      <Suspense fallback={fallbackEl}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default RootPage;
