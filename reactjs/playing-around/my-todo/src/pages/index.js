import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Layout } from '../components';
import GlobalSpinner from '../components/commons/GlobalSpinner';
import { logIn } from '../store/thunkActionCreators';
import Auth from './Auth';

const Home = React.lazy(() => import('./Home'));
const Login = React.lazy(() => import('./Login'));
const Signup = React.lazy(() => import('./Signup'));

const RootPage = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      dispatch(logIn(userInfo));
    } else if (!isLogged) {
      if (pathname === '/signup') {
        navigate(pathname);
      } else {
        navigate('/login');
      }
    } else {
      navigate('/');
    }
  }, [isLogged, navigate, dispatch, pathname]);

  return (
    <Layout>
      <Suspense fallback={<GlobalSpinner />}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default RootPage;
