import { registerWithEmail } from '../lib/authFunctions.js';

const registerDisplay = () => {
  const registerPage = `
  <section class=" register-page">
  <div class= "inputContainerRegister">
  <h2 >Iniciar sesión</h2>
  <img src="./pics/userpicNekko.jpg" class="logo-user" id="userPic">
                <input type="text" id="inputName" placeholder="Usuario">
                <p id="emptyInputName" class="error"></p>
                <input type="email" id="inputEmail" placeholder="Correo electrónico" required>
                <p id="errorEmail" class="error"></p>
                <input type="password" id="inputPassword"placeholder="Contraseña" required>
                <p id="passError" class="error"></p>
                <button id="btnRegister" class="button-orange"><a href="#/news">Registrate ahora</a></button>
            <div class="backLogin">
            <p class="pGoogle">¿Ya tienes una cuenta? <a href="#/login">Iniciar Sesión</a></p>
            </div>
        </div>
    </section>
`;

  const divElement = document.createElement('div');
  divElement.innerHTML = registerPage;

  /* const signUpForm =  */divElement.querySelector('#btnRegister').addEventListener('click', (e) => {
    e.preventDefault();
    const userValue = document.getElementById('inputName').value;
    const registerEmailValue = document.getElementById('inputEmail').value;
    const registerPasswordValue = document.getElementById('inputPassword').value;
    console.log(userValue, registerEmailValue, registerPasswordValue);

    registerWithEmail(registerEmailValue, registerPasswordValue)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
      return user;
    })
    .then((user) => {
      console.log(user);
      sendEmailVerificationFirebase();
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode)
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
    /* return signUpForm; */
  });
  return divElement;
};
export default registerDisplay;
console.log(registerDisplay);
