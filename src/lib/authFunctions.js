// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase/auth.js';
import { app } from './config.js';

const auth = getAuth(app);

export const registerWithEmail = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

 //auth del login usuario crea cuenta
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

 //auth del login usuario ya registrado
 document.getElementById("login-btn").addEventListener('click', function(){
  const loginEmail= document.getElementById("login-email").value;
  const loginPassword =document.getElementById("login-password").value;

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

//auth con google

