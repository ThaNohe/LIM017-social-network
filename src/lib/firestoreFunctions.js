/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import {
  collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
import { db } from './config.js';

<<<<<<< HEAD
export const saveTask = (description, email, createdAt) => addDoc(collection(db, 'tasks'), { description, email, createdAt });
export const onSnapshotFb = (callback) => onSnapshot(collection(db, 'tasks'), (callback));
export const deletePost = (id) => deleteDoc(doc(db, 'tasks', id));
=======
export const saveTask = (description, email, createdAt) => addDoc(collection(db, 'posts'), { description, email, createdAt });
export const onSnapshotFb = (callback) => onSnapshot(collection(db, 'posts'), (callback));
export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));
export const editPost = (id) => updateDoc(doc(db, 'posts', id));
>>>>>>> bf4d78ecdd091ddb26df67d9549d023420514c5e
