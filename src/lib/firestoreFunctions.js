// eslint-disable-next-line import/no-unresolved
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
import { db } from './config.js';

export const saveTask = (description) => addDoc(collection(db, 'tasks'), { description });
