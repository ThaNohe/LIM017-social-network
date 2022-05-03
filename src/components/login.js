import { singGoogle } from '../lib/authFunctions.js';

const loginDisplay = () => {
  const loginPage = `
  <section class= 'login-page'>
  <div class='center-box' id='login-div'>
  <h2 class='title-login-register' >ANIME GANG</h2>
  <img src='./pics/nekko-mascot.png' class='logo-user' id='userPic'>
  <p class='login-subtitle'> Inicia sesión</p>
  <input type='email' id='login-email' class='text-field' name='login-email' placeholder='Correo electrónico' required/>
  <input type='password' id='login-password' class='text-field' name='login-password' placeholder='Contraseña' required/>
  <p id='emptyInputPass' class='error'></p>
  <button id='loginBtn' class='button-login-orange'><a href='#/news'> Ingresar</a> </button> <br>
  <p class='link-nextpage'><a href='#/register'>¿Eres nuevo por aquí? Registrate ahora</a></p>
  <div class="line-google"><span> o </span></div>
  <div class='login-page__form-google'>
  <button class='button-login-orange' id='loginGoogle'>Ingresa con tu cuenta
  <img src='./pics/google-icon.png' class='logo-google' id='googleImgLogIn'>
  </button>
  </div>
</div>
</div>
</section>
`;
  const divElement = document.createElement('div');
  divElement.innerHTML = loginPage;

  /* const loginForm = */ divElement.querySelector('#loginBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const loginEmailValue = document.getElementById('login-email').value;
    const loginPasswordValue = document.getElementById('login-password').value;
    console.log(loginEmailValue, loginPasswordValue);
  });

  // Login with Google
  divElement.querySelector('#loginGoogle').addEventListener('click', () => {
    singGoogle(); //agregar dirección de pag luego de googlearse
  });

  return divElement;
};
export default loginDisplay;
console.log(loginDisplay);

/* signInWithEmailAndPassword(loginEmailValue, loginPasswordValue)
  .then((userCredential) => {
      const user = userCredential.user;
    })
    window.location.href(/#/news)
    
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
    });  
    return loginForm; 
 signInWithPopup(auth, provider)
    .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
     ...
  }).catch((error) => {
    Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    The email of the user's account used.
    const email = error.email;
     The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
     ...
  });  */