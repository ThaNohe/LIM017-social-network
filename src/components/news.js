import { signOutFirebase } from '../lib/authFunctions.js';
import { saveTask, onSnapshotFb } from '../lib/firestoreFunctions.js';

const newsDisplay = () => {
  const newsPage = `
  <section class="header">
        <nav class="header-nav">
            <div class="logos-container">
                <img src="../pics/logo-news.png" alt="logo" class="logo">
            </div>

            <div class="nav-container">
                <div for="check" class="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <input type="search" class="search-nav" id="search" placeholder="Search...">

                <div for="check" class="search" id="logOut">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </div>
            </div>
        </nav>
    </section>
    
        <section class="public-container ">
            <div class="direct-access">
                <div class="home-option">
                    <i class="fa-solid fa-house"></i>
                </div>
                <div class="destacado-option">
                    <i class="fa-solid fa-star"></i>
                    Destacado
                </div>
                <div class="loultimo-option">
                    <i class="fa-regular fa-clock"></i>
                    Lo ultimo
                </div>
                <div class="quizzes-option">
                    <i class="fa-solid fa-bomb"></i>
                    Quizzes
                </div>
                <div class="recomendaciones-option">
                    <i class="fa-solid fa-comments"></i>
                    Recomendaciones
                </div>
            </div>
            <form>
            <div class="post-container" id="tasks">
                <textarea id="description" class="post-text" placeholder="¿Qué estas pensando?"></textarea>
                <div class="button-post">
                    <button id="postSubmit" class="post-comment">Publicar</button>
                </div>
            </div>
            </form>
        </section>
    </div>
    <div id='post-Publish'>
    <h1>aqui va el post</h1>
    </div>
    `;
  const divElement = document.createElement('div');
  divElement.innerHTML = newsPage;
  const tasks = divElement.querySelector('#post-Publish');

  onSnapshotFb((querySnapshot) => {
    let html = '';
    querySnapshot.forEach((doc) => {
      const dataPost = doc.data();
      console.log(doc.data());
      // doc.data transforma los datos de un objeto de firebase a un objeto de javascript
      html += `
            <form class="postForm">
              <p>${dataPost.description} </p>  
            </form>
            `;
    });
    tasks.innerHTML = html;
  });

  /* divElement.querySelector('#postInput').addEventListener('click', () => {
   console.log('#postInput');
  }); */
  divElement.querySelector('#postSubmit').addEventListener('click', () => {
    const inputDes = divElement.querySelector('#description').value;
    saveTask(inputDes);
    tasks.innerHTML = inputDes;
    console.log(inputDes);
  });
  divElement.querySelector('#logOut').addEventListener('click', () => {
    signOutFirebase()
      .then(() => {
        window.location.href = '#/home';
      });
  });
  return divElement;
};

divElement.querySelector('#postInput').addEventListener('click', () => {
    const inputValue = document.getElementById('postInput').value;
    saveTask(inputValue);
    console.log('#postInput');
  });


export default newsDisplay;

/* window.addEventListener('DOMContentLoaded', () => {
  console.log('start news');
   const postContainer = document.querySelector('.post-container');
  postContainer.addEventListener((e) => {
    e.preventDefault()
    console.log('enviado')
  });
});  */
