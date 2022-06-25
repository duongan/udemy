import React from 'react';

import LoginForm from '../../components/LoginForm';
import styles from './styles.module.css';
import emptyImg from '../../assets/images/empty-image.png';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logoContainer}>
          <img src={emptyImg} alt="logo" />
          <div className={styles.appName}>
            <span>my</span>
            <span>Fin</span>
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.formTitle}>Log In</div>
          <LoginForm />
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Login;
