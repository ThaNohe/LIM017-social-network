export default () => {
  const registerPage = `
  <div class= "inputContainerRegister">
  <h2 >Iniciar sesión</h2>
  <img src="./pics/userpicNekko.jpg" class="logo-user" id="userPic">
                <input type="text" id="inputName" placeholder="Usuario">
                <p id="emptyInputName" class="error"></p>
                <input type="email" id="inputEmail" placeholder="Correo electrónico">
                <p id="errorEmail" class="error"></p>
                <input type="password" id="inputPassword"placeholder="Contraseña">
                <p id="passError" class="error"></p>
<<<<<<< HEAD
                <button id="buttonRegister" class="buttonnextPage"><a href="#/news">Registrate ahora</a></button>
            </div>
=======
                <button id="btnRegister" class="button-orange"><a href="#/news">Registrate ahora</a></button>
>>>>>>> f24ef2707a2ea8447016d2a67cecf2528621e809
            <div class="backLogin">
            <p class="pGoogle">¿Ya tienes una cuenta?</p>
            <button id="backLogin" class="backpage"><a href="#/login">Iniciar Sesión</a></button>
            </div>
        </div>
        </section>
    </section>
     `;

  const divElement = document.createElement('div');
  divElement.innerHTML = registerPage;
  return divElement;
};
