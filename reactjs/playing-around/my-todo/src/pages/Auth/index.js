import { Outlet, useLocation } from 'react-router-dom';
import styles from './Auth.module.scss';

const Auth = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <h1>{pathname === '/login' ? 'Sign In' : 'Sign Up'}</h1>
      <Outlet />
    </div>
  );
};

export default Auth;
