export default () => {
  const homePage = `
  <section id="welcomePage" class="welcome-background-pic">
  <div class="image-position">
  <p class="welcome-title-animegang">ANIME GANG
  <img src="./pics/flower.png" alt="flowerInPage" class="flower-title"></p>
  </div>
  <div class="intro-box" >
  <p>Se parte de nuestra comunidad de amantes de la animación japonesa,comparte tus experiencias 
  y recomendaciones de tus animes favoritos.
  </p>
  </div>
  <button id="btnJoinUs"class="buttonhomeorange"><a href="#/login">Únete</a></button>
</section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = homePage;
  return divElement;
};
