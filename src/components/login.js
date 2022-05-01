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
  <p class=" line-google"> —————— o ——————  </p> 
  <div class='login-page__form-google'>
  <button class='button-login-orange'>Ingresa con tu cuenta
  <img src='./pics/google-icon.png' class='logo-google' id='googleImgLogIn'>
  </button>
  </div>
</div>
</div>
</section>
`;
  const divElement = document.createElement('div');
  divElement.innerHTML = loginPage;

  const loginForm = divElement.querySelector('#loginBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const loginEmailValue = document.getElementById('login-email').value;
    const loginPasswordValue = document.getElementById('login-password').value;
    console.log(loginEmailValue, loginPasswordValue);
    signInWithEmailAndPassword(loginEmailValue, loginPasswordValue);
    return loginForm;
  });
  return divElement;
};
export default loginDisplay;
console.log(loginDisplay);
