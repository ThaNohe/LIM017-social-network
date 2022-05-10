import { changeView } from './index.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));


  window.addEventListener('DOMContentLoaded', () => {
    console.log('start news'); 

    const postContainer = document.querySelector('.post-container');
    postContainer.addEventListener((e) => {
      e.preventDefault()
      console.log('enviado')
    });
  });
};

window.addEventListener('load', init);
