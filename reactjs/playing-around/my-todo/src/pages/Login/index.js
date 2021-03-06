import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/use-auth';
import { logIn } from '../../store/thunkActionCreators';
import { validateEmail, validatePassword } from '../../utilities';
import styles from './Login.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signIn, userInfo, error: signInError } = useAuth();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    if (userInfo) {
      dispatch(logIn(userInfo));
      navigate('/');
    }
  }, [userInfo, dispatch, navigate]);

  useEffect(() => {
    const { field, message } = signInError || {};
    if (field === 'email') {
      setEmailError(message);
    }
    if (field === 'password') {
      setPasswordError(message);
    }
  }, [signInError]);

  const emailChangeHandler = () => {
    const validationResult = validateEmail(emailInputRef.current.value);
    if (validationResult) {
      setEmailError(validationResult.message);
    } else {
      setEmailError('');
    }
  };

  const passwordChangeHandler = () => {
    const validationResult = validatePassword(passwordInputRef.current.value);
    if (validationResult) {
      setPasswordError(validationResult.message);
    } else {
      setPasswordError('');
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredUsername = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    signIn(enteredUsername, enteredPassword);
  };

  // const emailEmpty =
  //   !emailInputRef || !emailInputRef.current || !emailInputRef.current.value;
  // const passwordEmpty =
  //   !passwordInputRef ||
  //   !passwordInputRef.current ||
  //   !passwordInputRef.current.value;

  const disableButton = emailError || passwordError;

  return (
    <form
      className={styles.signInForm}
      name="signin_form"
      onSubmit={submitHandler}
      noValidate
    >
      <div className={styles.control}>
        <label htmlFor="username">Email</label>
        <input
          className={emailError && styles.invalid}
          id="username"
          name="username"
          type="text"
          required
          ref={emailInputRef}
          onChange={emailChangeHandler}
        />
        <p>{emailError}</p>
      </div>
      <div className={styles.control}>
        <label htmlFor="password">Password</label>
        <input
          className={passwordError && styles.invalid}
          id="password"
          name="password"
          type="password"
          required
          min={6}
          ref={passwordInputRef}
          onChange={passwordChangeHandler}
        />
        <p>{passwordError}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button type="submit" disabled={disableButton}>
          Log In
        </button>
      </div>
      <div className={styles.control}>
        <Link to={'/signup'}>Register new account?</Link>
      </div>
    </form>
  );
};

export default Login;
