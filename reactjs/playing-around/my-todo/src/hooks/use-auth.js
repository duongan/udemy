import { signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback, useState } from 'react';
import { FirebaseAuth } from '../firebase';

const useAuth = () => {
  const [userInfo, setUserInfo] = useState(null);
  const signIn = useCallback((email, password) => {
    signInWithEmailAndPassword(FirebaseAuth, email, password)
      .then((userCredential) => {
        const { _tokenResponse } = userCredential;
        // console.log('userCredential', userCredential);
        // console.log('_tokenResponse', _tokenResponse);
        localStorage.setItem('userInfo', JSON.stringify(_tokenResponse));
        setUserInfo(_tokenResponse);
      })
      .catch((error) => {
        console.log('Log in failed.');
      });
  }, []);

  return {
    signIn,
    userInfo,
  };
};

export default useAuth;
