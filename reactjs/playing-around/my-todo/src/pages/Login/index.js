import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/use-auth';
import { UserActions } from '../../store/UserSlice';
import styles from './Login.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signIn, userInfo } = useAuth();

  useEffect(() => {
    console.log('Login', userInfo);
    if (userInfo) {
      dispatch(UserActions.saveUserInfo(userInfo));
      navigate('/');
    }
  }, [userInfo, dispatch, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    signIn('duongan@abc.com', '111111');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
