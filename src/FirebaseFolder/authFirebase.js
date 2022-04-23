import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';
import { login } from '../components/login.js';

const firebaseConfig = {
  apiKey: 'AIzaSyD89pEjuYNfhT5EjbFclH1iH_7oYap8ad8',
  authDomain: 'socialnetwork-animegang.firebaseapp.com',
  projectId: 'socialnetwork-animegang',
  storageBucket: 'socialnetwork-animegang.appspot.com',
  messagingSenderId: '422235697801',
  appId: '1:422235697801:web:b2cc7592f16fc54a39cc58',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('loginBtn').addEventListener('click', function(){
const loginEmail= document.getElementById('login-email').value;
const loginPassword =document.getElementById('login-password').value;

signInWithEmailAndPassword(auth, loginEmail, loginPassword)
.then((userCredential) => {
const user = userCredential.user;
document.getElementById("result-box").style.display="inline";
document.getElementById("login-div").style.display="none";
document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });
});


  document.getElementById("register-btn").addEventListener('click', function(){

   const registerEmail= document.getElementById("register-email").value;
   const registerPassword =document.getElementById("register-password").value;

   createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("register-div").style.display="none";
     document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+" was Registered Successfully";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("register-div").style.display="none";
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });
});


document.getElementById("log-out-btn").addEventListener('click', function(){
  signOut(auth).then(() => {
     document.getElementById("result-box").style.display="none";
       document.getElementById("login-div").style.display="inline";
  }).catch((error) => {
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
  });

});
