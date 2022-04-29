// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword, sendSignInLinkToEmail } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';
import { app } from './config.js';

const auth = getAuth(app);

export const registerWithEmail = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      // ..
    });
};

// link de email de verificacion
export const emailVerification = (email) => {
  sendSignInLinkToEmail(auth.currentUser)
    .then((result) => {
      // Email verification sent!
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
/* 1-auth del login usuario ya registrado

2-auth del login usuario nuevo crea cuenta
document.getElementById("register-btn").addEventListener('click', function(){

    const registerEmail= document.getElementById("register-email").value;
    const registerPassword =document.getElementById("register-password").value;
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
   .then((userCredential) => {
     const user = userCredential.user;
     document.getElementById("result-box").style.display="inline";
      document.getElementById("register-div").style.display="none";
      document.getElementById("result").innerHTML="Bienvenido <br>"+registerEmail+" fue registrado";
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
    document.getElementById("result").innerHTML="Bienvenido <br>"+loginEmail;
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

 */
