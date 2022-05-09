import { registerWithEmail, sendEmailVerificationFirebase } from './authFunctions.js';
import registerDisplay from '../components/register.js';

const registerFirebase = () => {
  const divElement = document.createElement('div');
  divElement.querySelector('#btnRegister').addEventListener('click', (e) => {
    e.preventDefault();
    const userValue = document.getElementById('inputName').value;
    const registerEmailValue = document.getElementById('inputEmail').value;
    const registerPasswordValue = document.getElementById('inputPassword').value;
    console.log(userValue, registerEmailValue, registerPasswordValue);
    registerWithEmail(registerEmailValue, registerPasswordValue)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        return user;
      })
      .then((user) => {
        console.log(user);
        sendEmailVerificationFirebase();
        // eslint-disable-next-line no-alert
        alert('Ya se envio tu correo de verificación');
        window.location.href = '#/login';
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      // ..
      });
    return registerDisplay;
  });
};
export default registerFirebase;
