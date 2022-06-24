import React from "react";

import styles from "./styles.module.css";
import emptyImg from "../../assets/images/empty-image.png";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logoContainer}>
          <img src={emptyImg} alt="logo" />
          <div className={styles.appName}>
            <span>My</span>
            <span>Fin</span>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form>
            <div>
              <label>Email</label>
              <input type="text" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" />
            </div>
          </form>
        </div>
      </div>
      <div className={styles.right}>Right</div>
    </div>
  );
};

export default Login;
