// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';
import { app } from './config.js';

const auth = getAuth(app);

export const registerWithEmail = (email, password) => (
  createUserWithEmailAndPassword(auth, email, password));

export const sendEmailVerificationFirebase = () => (
  sendEmailVerification(auth.currentUser));

// auth del login usuario ya registrado
/* signInWithEmailAndPassword(auth, login-email, login-password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  }); */

// auth con google
