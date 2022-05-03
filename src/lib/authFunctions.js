// eslint-disable-next-line import/no-unresolved
import {
  getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';
import { app } from './config.js';

const auth = getAuth(app);

// Función de registro

export const registerWithEmail = (email, password) => (
  createUserWithEmailAndPassword(auth, email, password));

// Función de verificación de email

export const sendEmailVerificationFirebase = () => (
  sendEmailVerification(auth.currentUser));

// auth del login usuario ya registrado

export const loginWithEmail = (email, password) => (
  signInWithEmailAndPassword(auth, email, password));

/* signInWithEmailAndPassword(auth, login-email, login-password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  }); */

// auth con google
