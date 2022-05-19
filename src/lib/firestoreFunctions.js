/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import {
  collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc, getDoc, orderBy, query,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
import { db } from './config.js';

export const saveTask = (description, email, createdAt) => addDoc(collection(db, 'posts'), { description, email, createdAt });
export const onSnapshotFb = (callback) => onSnapshot(query(collection(db, 'posts'), orderBy('createdAt', 'desc')), callback);
export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));
export const getPost = (id) => getDoc(doc(db, 'posts', id));
export const editPost = (id, newPost) => {
  debugger
  updateDoc(doc(db, 'posts', id), newPost)};
