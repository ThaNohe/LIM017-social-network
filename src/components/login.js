const loginDisplay = () => {
  const loginPage = `
  <section class=" login-page">
  <div class="center-box" id="login-div">
  <h2 >Iniciar sesión</h2>
  <img src="./pics/userpicNekko.jpg" class="logo-user" id="userPic">
  <div class="login-page__form-newuser">
  <input type="email" id="login-email" class="text-field" name="login-email" placeholder="Correo electrónico" required/>
  <br>
  <input type="password" id="login-password" class="text-field" name="login-password" placeholder="Contraseña" required/>
  <br>
  <p id="emptyInputPass" class="error"></p>
  <button id="loginBtn" class="button-orange"><a href="#/news"> Iniciar Sesión</a> </button> <br>
  <a href="#/register">¿Eres nuevo por aquí? Registrate ahora</a>
  </div>
  <div class="login-page__form-google">
  <button class="button-orange">Ingresa con tu cuenta Google
  <img src="./pics/google-icon.png" class="logo-google" id="googleImgLogIn">
  </button>
  </div>
</div>
</div>
</section>
`;
  const divElement = document.createElement('div');
  divElement.innerHTML = loginPage;
  /* divElement.querySelector('#loginBtn').addEventListener('click', () => function() {
    const registerEmail = document.getElementById("register-email").value; }); */
  return divElement;
};
export default loginDisplay;
