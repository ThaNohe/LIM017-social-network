export default () => {
  const homePage = `
<<<<<<< HEAD
  <section id="welcomePage" >

  <div class="parent" >

    <img class="picture1" src="./pics/welcome-pic.jpg" alt="Fondo bienvenida" />
    <img class="picture2" src="./pics/flor-cerezo-pic.jpg" alt="Icono titulo" />
    
  </div>

   <p class="title">ANIME GANG</p>
   <button id="btnJoinUs"class="btnJoinUs"><a href="#/login">Únete</a></button>
</section>
=======
  <section id="welcomePage">

  <div class="home-container">
  <div class="title-home">
  <h1 class="welcome-title-animegang">ANIME GANG</h1>
  <img src="./pics/flower.png" alt="flowerInPage" class="flower-title">
  </div>
  <div class="intro-box" >
  Se parte de nuestra comunidad de amantes de la animación japonesa,comparte tus experiencias 
  y recomendaciones de tus animes favoritos.
  </div>
  <button id="btnJoinUs"class="buttonhomeorange"><a href="#/login">Únete</a></button>
  </div>
  </section>
>>>>>>> f24ef2707a2ea8447016d2a67cecf2528621e809
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = homePage;
  return divElement;
};
