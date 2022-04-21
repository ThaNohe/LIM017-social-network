export default () => {
  const homePage = `
  <section id="welcomePage" >
  <img src="./pics/welcome-pic.jpg" alt="Fondo bienvenida" class="picture">
   <p class="title">ANIME GANG</p>
   <button id="btnJoinUs"class="title"><a href="#/login">Únete</a></button>
</section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = homePage;
  return divElement;
};
