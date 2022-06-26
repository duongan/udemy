import React from 'react';

import { Input, Button } from '../common';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const forgotPasswordHandler = (e) => {
    e.preventDefault();
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
          <Button style={{ background: '#b33556' }} title="Log in" />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
