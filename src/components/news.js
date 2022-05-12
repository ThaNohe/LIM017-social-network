import { signOutFirebase, auth } from '../lib/authFunctions.js';
import { saveTask, onSnapshotFb, deletePost } from '../lib/firestoreFunctions.js';
import { loginWithEmail, signGoogle } from '../lib/authFunctions.js';

const newsDisplay = () => {
  const newsPage = `
  <section class="header">
        <nav class="header-nav">
            <div class="logos-container">
                <img src="../pics/logo-news.png" alt="logo" class="logo">
            </div>

            <div class="nav-container">
                <div for="check" class="search-lup">
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
                <div class="recomendaciones-option">
                    <i class="fa-solid fa-comments"></i>
                    Recomendaciones
                </div>
            </div>
            <form>
            <div class="post-container" id="tasks">
            <input type="text" id="description" class="post-text" placeholder="¿Qué estas pensando?">
            <div class="button-post">
                    <button id="postSubmit" class="post-comment">Publicar</button>
                </div>
            </div>
            </form>
        </section>
    </div>
    <div class="post-publish" id='post-Publish'>
    </div>
    `;
  const divElement = document.createElement('div');
  divElement.innerHTML = newsPage;
  const tasks = divElement.querySelector('#post-Publish');

  onSnapshotFb((querySnapshot) => {
    let html = '';
    querySnapshot.forEach((doc) => {
      const dataPost = doc.data();
      console.log(doc.id);
      /* console.log(doc.data()); */
      // doc.data transforma los datos de un objeto de firebase a un objeto de javascript
      html += `
      <form class="post-container">
      <p class='autor-post'>${dataPost.author} </p> 
      <p class='description-post'>${dataPost.description} </p> 
      <p class='time-post'>${dataPost.createdAt} </p>
      <button class='btn-borrar' data-id="${doc.id}")>Borrar</button>
      <button class='btn-edit' data-id="${doc.id}")>Editar</button>
    </form>
            `;
    });
    tasks.innerHTML = html;

    const btnBorrar = tasks.querySelectorAll('.btn-borrar');
    console.log(btnBorrar);
    btnBorrar.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        deletePost(dataset.id);
     /*    if (idUsuario == idUsuarioPost) {
          borrarPost(); */
       }
       
        /* console.log(event.target.dataset.id) */
        /* console.log('deleting'); */
      });
    });

    

    divElement.querySelector('#postSubmit').addEventListener('click', () => {
      const inputDes = divElement.querySelector('#description').value;
      const todayDate = new Date();
      const authorId = auth.currentUser;
      saveTask(inputDes, authorId.uid, todayDate);
      divElement.querySelector('#description').value = '';
      tasks.innerHTML += inputDes;
      console.log(inputDes);
    });
  });
<<<<<<< HEAD
  /* divElement.querySelector('#postInput').addEventListener('click', () => {
   console.log('#postInput');
  }); */
  divElement.querySelector('#postSubmit').addEventListener('click', () => {
    const inputDes = divElement.querySelector('#description').value;
    const todayDate = new Date();
    saveTask(inputDes, dataset.id, todayDate);
    divElement.querySelector('#description').value = '';
    tasks.innerHTML += inputDes;
    console.log(inputDes);
  });
=======

>>>>>>> 9c22a579559a5def70c4a606e43b56c9555b0c07
  divElement.querySelector('#logOut').addEventListener('click', () => {
    signOutFirebase()
      .then(() => {
        window.location.href = '#/home';
      });
  });
  return divElement;
};
export default newsDisplay;
