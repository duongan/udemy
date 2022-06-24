import React from 'react';

import styles from './styles.module.css';

const LoginForm = () => {
  return (
    <form>
      <div className={styles.controls}>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="text" />
      </div>
      <div className={styles.controls}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
    </form>
  );
};

export default LoginForm;
