import {
  getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider,
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

// auth con google
export const provider = new GoogleAuthProvider();

export const signGoogle = () => (
  signInWithPopup(auth, provider)
);

// auth Log out
/* export const signOutFirebase = () => {
  const auth1 = getAuth();
  return signOut(auth1);
}; */
