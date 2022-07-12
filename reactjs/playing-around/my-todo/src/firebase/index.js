import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCT2ziLjhvBVHV_ne8Z4ae3ATxVWD7EKAU',
  projectId: 'react-http-3b4e8',
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
// console.log('auth', auth);
// signInWithEmailAndPassword(auth, 'duongan@abc.com', '1111111')
//   .then((user) => {
//     console.log('user', user);
//   })
//   .catch((error) => {
//     console.log('Auth error', error);
//   });
