import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from './Auth.module.scss';

const Auth = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { userInfo: storedUserInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (storedUserInfo) {
      navigate('/');
    }
  }, [storedUserInfo, navigate]);

  return (
    <div className={styles.container}>
      <h1>{pathname === '/login' ? 'Sign In' : 'Sign Up'}</h1>
      <Outlet />
    </div>
  );
};

export default Auth;
