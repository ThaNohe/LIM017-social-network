/* eslint-disable import/no-unresolved */
import {
  collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc, getDoc, orderBy, query,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
import { db } from './config.js';

// Función para guardar post
export const saveTask = (description, email, createdAt) => addDoc(collection(db, 'posts'), { description, email, createdAt });

// Función para tener el  post en tiempo real y que se publique de forma descendente
export const onSnapshotFb = (callback) => onSnapshot(query(collection(db, 'posts'), orderBy('createdAt', 'desc')), callback);

// Función para borrar post
export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

// Función para editar post
export const getPost = (id) => getDoc(doc(db, 'posts', id));
export const editPost = (id, newPost) => {
  debugger
  updateDoc(doc(db, 'posts', id), newPost)};
