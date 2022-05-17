/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import {
<<<<<<< HEAD
  collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc, getDoc,
=======
  collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc, getDoc, orderBy, query,
>>>>>>> 23f401682f2092392f4554ad1149f28554e4d86a
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
import { db } from './config.js';

export const saveTask = (description, email, createdAt) => addDoc(collection(db, 'posts'), { description, email, createdAt });
export const onSnapshotFb = (callback) => onSnapshot(query(collection(db, 'posts'), orderBy('createdAt', 'desc')), callback);
export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));
<<<<<<< HEAD
export const editPost = (id) => updateDoc(doc(db, 'posts', id), {});
export const getPost = (id) => getDoc(doc(db, 'posts', id));
=======
export const getPost = (id) => getDoc(doc(db, 'posts', id));
export const editPost = (id, newPost) => updateDoc(doc(db, 'posts', id), newPost);
>>>>>>> 23f401682f2092392f4554ad1149f28554e4d86a
