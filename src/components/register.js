import { registerWithEmail } from '../lib/authFunctions.js';

const registerDisplay = () => {
  const registerPage = `
  <section class=' register-page'>
  <div class= 'register-page-container'>
  <h2 class='title-login-register'>ANIME GANG</h2>
  <img src='./pics/userpicNekko.jpg' class='logo-user' id='userPic'> <br>
                <input type='text' id='inputName' placeholder='Usuario'> <br>
                <p id='emptyInputName' class='error'></p>
                <input type='email' id='inputEmail' placeholder='Correo electrónico' required> <br>
                <p id='errorEmail' class='error'></p>
                <input type='password' id='inputPassword'placeholder='Contraseña' required> <br>
                <p id='passError' class='error'></p>
                <button id='btnRegister' class='button-login-orange'><a href='#/news'>Registrate ahora</a></button>
            <div class='backLogin'>
            <p class='link-nextpage'><a href='#/login'>¿Ya tienes una cuenta? Iniciar Sesión</a></p>
            <div class='login-page__form-google'>
  <button class='button-login-orange'>Ingresa con tu cuenta Google
  <img src='./pics/google-icon.png' class='logo-google' id='googleImgLogIn'>
  </button>
  </div>
            </div>
        </div>
    </section>
`;

  const divElement = document.createElement('div');
  divElement.innerHTML = registerPage;

  const signUpForm = divElement.querySelector('#btnRegister').addEventListener('click', (e) => {
    e.preventDefault();
    const userValue = document.getElementById('inputName').value;
    const registerEmailValue = document.getElementById('inputEmail').value;
    const registerPasswordValue = document.getElementById('inputPassword').value;
    console.log(userValue, registerEmailValue, registerPasswordValue);
    registerWithEmail(registerEmailValue, registerPasswordValue);
    return signUpForm;
  });
  return divElement;
};
export default registerDisplay;
console.log(registerDisplay);
