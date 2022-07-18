import { Link } from 'react-router-dom';
import styles from './Signup.module.scss';

const Signup = () => {
  return (
    <form className={styles.signupForm}>
      <div className={styles.control}>
        <label>Email</label>
        <input type="text" />
      </div>
      <div className={styles.control}>
        <label>Display Name</label>
        <input type="text" />
      </div>
      <div className={styles.control}>
        <label>Password</label>
        <input type="password" />
      </div>
      <div className={styles.control}>
        <label>Re-password</label>
        <input type="password" />
      </div>
      <div className={styles.control}>
        <button type="submit">Register</button>
      </div>
      <div className={styles.control}>
        <Link to={'/login'}>Already have an account?</Link>
      </div>
    </form>
  );
};

export default Signup;
