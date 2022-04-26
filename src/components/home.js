export default () => {
  const homePage = `
  <section id="welcomePage" class="welcome-background-pic">
  <p class="welcome-title-animegang">ANIME GANG</p>
  <div class="intro-box" >
  <p>Se parte de nuestra comunidad de amantes de la animación japonesa,comparte tus experiencias 
  y recomendaciones de tus animes favoritos.
  </p>
  </div>
  <button id="btnJoinUs"class="title"><a href="#/login">Únete</a></button>

</section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = homePage;
  return divElement;
};
