export default () => {
  const homePage = `
  <section id="welcomePage" >

  <div class="parent" >

    <img class="picture1" src="./pics/welcome-pic.jpg" alt="Fondo bienvenida" />
    <img class="picture2" src="./pics/flor-cerezo-pic.jpg" alt="Icono titulo" />
    
  </div>

   <p class="title">ANIME GANG</p>
   <button id="btnJoinUs"class="btnJoinUs"><a href="#/login">Únete</a></button>
</section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = homePage;
  return divElement;
};
