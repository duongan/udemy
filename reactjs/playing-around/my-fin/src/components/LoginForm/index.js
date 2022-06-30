import React, { useState } from 'react';

import { Input, Button } from '../common';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const invalidForm = !enteredEmail || !enteredPassword;

  const emailChangeHandler = (value) => {
    setEnteredEmail(value);
  };

  const passwordChangeHandler = (value) => {
    setEnteredPassword(value);
  };

  const forgotPasswordHandler = (e) => {
    e.preventDefault();
  };

  const login = () => {
    console.log('Login clicked!');
  };

  const btnProps = {
    hoverEffect: true,
    hoveredBgColor: '#cb5070',
    defaultBoxShadow: '1px 2px 6px rgb(179 53 86 / 30%)',
    title: 'Log in',
    style: {
      height: '2.5rem',
      backgroundColor: '#b33556',
      textTransform: 'uppercase',
      boxShadow: '1px 5px 6px rgb(179 53 86 / 50%)',
      opacity: invalidForm ? '0.3' : '1',
    },
    onClick: login,
    disabled: invalidForm,
  };

  return (
    <form>
      <div className={styles.controls}>
        <label htmlFor="email">E-mail</label>
        <Input id="email" type="text" onChange={emailChangeHandler} />
      </div>
      <div className={styles.controls}>
        <label htmlFor="password">Password</label>
        <a href="./" onClick={forgotPasswordHandler}>
          Forgot password?
        </a>
        <Input id="password" type="password" onChange={passwordChangeHandler} />
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
