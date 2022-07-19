import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Signup.module.scss';

const Signup = () => {
  const emailRef = useRef();
  const displayNameRef = useRef();
  const passwordRef = useRef();
  const repasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.signupForm} onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="email-input">Email</label>
        <input id="email-input" type="text" ref={emailRef} />
        <p>Email is invalid.</p>
      </div>
      <div className={styles.control}>
        <label htmlFor="display-name-input">Display Name</label>
        <input id="display-name-input" type="text" ref={displayNameRef} />
        <p>Display Name is invalid.</p>
      </div>
      <div className={styles.control}>
        <label htmlFor="password-input">Password</label>
        <input id="password-input" type="password" ref={passwordRef} />
        <p>Password must be more than 5 characters.</p>
      </div>
      <div className={styles.control}>
        <label htmlFor="repassword-input">Re-password</label>
        <input id="repassword-input" type="password" ref={repasswordRef} />
        <p>Re-password does not match.</p>
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
