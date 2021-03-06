import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useCallback, useState } from 'react';
import {
  AUTH_ERROR_MESSAGE,
  EMAIL_IN_USE_CODE,
  INVALID_EMAIL_CODE,
  INVALID_PASSWORD_CODE,
  USER_NOT_FOUND_CODE,
} from '../constants';
import { FirebaseAuth } from '../firebase';
import { validateEmail, validatePassword } from '../utilities';

const useAuth = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const signIn = useCallback((email, password) => {
    // Validate email
    const emailValidationResult = validateEmail(email);
    if (emailValidationResult) {
      setError(emailValidationResult);
      return;
    }

    // Validate password
    const passwordValidationResult = validatePassword(password);
    if (passwordValidationResult) {
      setError(passwordValidationResult);
      return;
    }

    signInWithEmailAndPassword(FirebaseAuth, email, password)
      .then(
        (userCredential) => {
          const { _tokenResponse } = userCredential;
          const { expiresIn } = _tokenResponse;
          _tokenResponse.expiresAt = Date.now() + expiresIn * 1000;
          setUserInfo(_tokenResponse);
        },
        (rejected) => {
          const field =
            rejected.code === INVALID_EMAIL_CODE ||
            rejected.code === USER_NOT_FOUND_CODE
              ? 'email'
              : rejected.code === INVALID_PASSWORD_CODE
              ? 'password'
              : '';
          setError({ message: AUTH_ERROR_MESSAGE[rejected.code] || '', field });
        }
      )
      .catch((error) => {
        console.log('Log in failed.', error);
        setError({ message: 'Logging in failed!' });
      });
  }, []);

  const signUp = useCallback((email, password) => {
    createUserWithEmailAndPassword(FirebaseAuth, email, password)
      .then(
        (userCredential) => {
          const { _tokenResponse } = userCredential;
          const { expiresIn } = _tokenResponse;
          _tokenResponse.expiresAt = Date.now() + expiresIn * 1000;
          setUserInfo(_tokenResponse);
        },
        (rejected) => {
          const field = rejected.code === EMAIL_IN_USE_CODE ? 'email' : '';
          setError({ message: AUTH_ERROR_MESSAGE[rejected.code] || '', field });
        }
      )
      .catch((error) => {
        console.log('Sign up failed.', error);
        setError({ message: 'Sign up failed!' });
      });
  }, []);

  return {
    signIn,
    signUp,
    error,
    userInfo,
  };
};

export default useAuth;
