export default () => {
  const newsFeed = `
  <button id="btnJoinUs"class="title"><a href="#/home">Cerrar sesion</a></button>
    `;
  const divElement = document.createElement('div');
  divElement.innerHTML = newsFeed;
  return divElement;
};