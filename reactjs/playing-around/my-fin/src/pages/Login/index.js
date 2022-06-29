import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import SocialButtons from '../../components/SocialButtons';
import HeaderLogo from '../../components/HeaderLogo';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <HeaderLogo />
        <div className={styles.formContainer}>
          <div className={styles.formTitle}>Log In</div>
          <LoginForm />
          <div className={styles.seperator}></div>
          <SocialButtons />
        </div>
        <div className={styles.signupLinkContainer}>
          <Link to="/sign-up">Sign up with email</Link>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Login;
