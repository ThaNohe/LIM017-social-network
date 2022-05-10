// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js';
// eslint-disable-next-line import/no-unresolved
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyARl0JtBJwmmCcNBy_Q8V30YI1CiJdW8Iw',
  authDomain: 'animegang-social.firebaseapp.com',
  projectId: 'animegang-social',
  storageBucket: 'animegang-social.appspot.com',
  messagingSenderId: '531993327800',
  appId: '1:531993327800:web:e136b5287c4499d3649c4d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
