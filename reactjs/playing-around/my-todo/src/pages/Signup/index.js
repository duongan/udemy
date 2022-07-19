import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useAuth from '../../hooks/use-auth';
import {
  validateEmail,
  validatePassword,
  validateRepassword,
} from '../../utilities';
import styles from './Signup.module.scss';
import { UserActions } from '../../store/UserSlice';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repasswordRef = useRef();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repasswordError, setRepasswordError] = useState('');
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const { signUp, userInfo, error: signUpError } = useAuth();

  useEffect(() => {
    const { field, message } = signUpError || {};
    if (field === 'email') {
      setEmailError(message);
    }
  }, [signUpError]);

  useEffect(() => {
    if (userInfo) {
      dispatch(UserActions.saveUserInfo(userInfo));
      navigate('/');
    }
  }, [userInfo, navigate, dispatch]);

  const emailChangeHandler = () => {
    const validatedResult = validateEmail(emailRef.current.value);
    if (validatedResult) {
      setEmailError(validatedResult.message);
    } else {
      setEmailError('');
    }
  };

  const passwordChangeHandler = () => {
    const validatedResult = validatePassword(passwordRef.current.value);
    if (validatedResult) {
      setPasswordError(validatedResult.message);
    } else {
      setPasswordError('');
    }
  };

  const repasswordChangeHandler = () => {
    const validationResult = validateRepassword(
      repasswordRef.current.value,
      passwordRef.current.value
    );
    if (validationResult) {
      setRepasswordError(validationResult.message);
    } else {
      setRepasswordError('');
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (emailRef.current.value === '') {
      setEmailError('Email is required.');
      return;
    }

    if (passwordRef.current.value === '') {
      setPasswordError('Password is required.');
      return;
    }

    if (repasswordRef.current.value === '') {
      setRepasswordError('Re-password is required.');
      return;
    }

    if (emailError || passwordError || repasswordError) {
      return;
    }

    signUp(emailRef.current.value, passwordRef.current.value);
  };

  const disableButton = emailError || passwordError || repasswordError;

  return (
    <form className={styles.signupForm} onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="email-input">Email</label>
        <input
          className={emailError && styles.invalid}
          id="email-input"
          type="text"
          ref={emailRef}
          onChange={emailChangeHandler}
        />
        <p>{emailError}</p>
      </div>
      <div className={styles.control}>
        <label htmlFor="password-input">Password</label>
        <input
          className={passwordError && styles.invalid}
          id="password-input"
          type="password"
          ref={passwordRef}
          onChange={passwordChangeHandler}
        />
        <p>{passwordError}</p>
      </div>
      <div className={styles.control}>
        <label htmlFor="repassword-input">Re-password</label>
        <input
          className={repasswordError && styles.invalid}
          id="repassword-input"
          type="password"
          ref={repasswordRef}
          onChange={repasswordChangeHandler}
        />
        <p>{repasswordError}</p>
      </div>
      <div className={styles.control}>
        <button type="submit" disabled={disableButton}>
          Register
        </button>
      </div>
      <div className={styles.control}>
        <Link to={'/login'}>Already have an account?</Link>
      </div>
    </form>
  );
};

export default Signup;
