export default () => {
  const loginPage = `
<section class=" loginPage">
  <img src="./pics/login-pic.jpg" alt="Fondo login" class="loginBackgr">
  <div class="center-box" id="login-div">
  <h2 >Iniciar sesión</h2>
  <img src="./pics/userpicNekko.jpg" class="logoUser" id="userPic">
  <div class="loginRegular">
  <input type="email" id="login-email" class="text-field" name="login-email" placeholder="Correo electrónico" required/><br>
  <input type="password" id="login-password" class="text-field" name="login-password" placeholder="Contraseña" required/><br>
  <p id="emptyInputPass" class="error"></p>
  <button id="loginBtn" class="buttonstyle"><a href="#/news"> Iniciar Sesión</a> </button> <br>
  <a href="#/register">¿Eres nuevo por aquí? Registrate ahora</a>
  </div>
  <div class="loginGoogle">
  <button class="pGoogle">Ingresa con tu cuenta Google
  <img src="./pics/google-icon.png" class="logoGoogle" id="googleImgLogIn">
  </button>
  </div>
</div>
</div>
</section>
`;
  const divElement = document.createElement('div');
  divElement.innerHTML = loginPage;
  return divElement;
};
