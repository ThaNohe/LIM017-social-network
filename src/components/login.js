export default () => {
  const loginPage = `
    <section class="loginContainer">
        <section class="subLoginContainer">
          <div class="loginSubContainer"> 
            <p class="loginTittle">Iniciar sesión</p>
            <div class="inputContainer">
            <input type="text" placeholder="Correo electrónico" id="inputEmail">
            <p id="emptyInputEmail" class="error"></p>
            <input type="password" placeholder="Contraseña" id="inputPass">
            <p id="emptyInputPass" class="error"></p>
            <button id="loginBtn" class="buttonnextPage"><a href="#/news"> Iniciar Sesión</a> </button>
            </div>
            <div class="withGoogle">
            <p class="pGoogle">Iniciar sesión con google</p>
            <img id="papeLogIn" style="display:none" src=./img/pape.png>
            <img src="./img/googleLogo.png" class="logoGoogle" id="googleImgLogIn">
            <p class="pGoogle">¿No tienes una cuenta?</p>
            <button id="registerP" class="backpage"><a href="#/register">¿Eres nuevo por aquí? Registrate ahora</a></button>
            </div>
          </div>
          </section>
        </section>
    `;

  const divElement = document.createElement('div');
  divElement.innerHTML = loginPage;
  return divElement;
};
