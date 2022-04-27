// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBZih3O-Z-TKcRE03kTfjZE6kDcR98vVTA',
  authDomain: 'animegang-reloaded.firebaseapp.com',
  projectId: 'animegang-reloaded',
  storageBucket: 'animegang-reloaded.appspot.com',
  messagingSenderId: '790386184835',
  appId: '1:790386184835:web:984daae6e30b9eaddcc1b6',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
