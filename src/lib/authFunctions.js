// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';
import { app } from './config.js';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const registerWithEmail = (email, password) => (
  createUserWithEmailAndPassword(auth, email, password));

export const sendEmailVerificationFirebase = () => (
  sendEmailVerification(auth.currentUser));

// auth del login usuario ya registrado
/* export const signInWithEmailAndPassword = (login-email, login-password) => (
  signEmailAndPasword(auth, login-email, login-password)); */

// auth con google
export const signGoogle = () => (
  signInWithPopup(auth, provider)
);
