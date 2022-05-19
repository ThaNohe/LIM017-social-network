/* eslint-disable import/no-unresolved */
export {
  collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc, getDoc, orderBy, query,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';

export {
  getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';
