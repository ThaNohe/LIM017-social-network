export default () => {
  const registerPage = `
  <section class=" register-page">
  <div class= "inputContainerRegister">
                <input type="text" id="inputName" placeholder="Usuario">
                <p id="emptyInputName" class="error"></p>
                <input type="email" id="inputEmail" placeholder="Correo electrónico">
                <p id="errorEmail" class="error"></p>
                <input type="password" id="inputPassword"placeholder="Contraseña">
                <p id="passError" class="error"></p>
                <button id="btnRegister" class="button-orange"><a href="#/news">Registrate ahora</a></button>
            </div>
            <div class="backLogin">
            <p class="pGoogle">¿Ya tienes una cuenta? <a href="#/login">Iniciar Sesión</a></p>
            </div>
        </div>
    </section>
`;

  const divElement = document.createElement('div');
  divElement.innerHTML = registerPage;

/*   const registerEmail = divElement.querySelector('#btnRegister').addEventListener('click', () => function () {
    const registerEmailValue = document.getElementById('btnRegister').value;
  }
  return registerEmail ); */
  return divElement;
};
