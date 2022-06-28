import React from 'react';

import { Input, Button } from '../common';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const forgotPasswordHandler = (e) => {
    e.preventDefault();
  };

  const login = () => {
    console.log('Login clicked!');
  };

  const btnProps = {
    hoveredBgColor: '#cb5070',
    bgColor: '#b33556',
    boxShadow: '1px 5px 6px rgb(179 53 86 / 50%)',
    title: 'Log in',
    height: '2.5rem',
    onClick: login,
  };

  return (
    <form>
      <div className={styles.controls}>
        <label htmlFor="email">E-mail</label>
        <Input id="email" type="text" />
      </div>
      <div className={styles.controls}>
        <label htmlFor="password">Password</label>
        <a href="./" onClick={forgotPasswordHandler}>
          Forgot password?
        </a>
        <Input id="password" type="password" />
      </div>
      <div className={styles.controls}>
        <div className={styles.rememberMeContainer}>
          <Input id="remember-me" name="remember_me" type="radio" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <div className={styles.loginBtnContainer}>
          <Button {...btnProps} />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
