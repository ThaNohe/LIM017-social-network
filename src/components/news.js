import { signOutFirebase, auth } from '../lib/authFunctions.js';
import {
  saveTask,
  onSnapshotFb,
  deletePost,
  getPost,
  /* editPost, */
} from '../lib/firestoreFunctions.js';

const newsDisplay = () => {
  const divElement = document.createElement('div');
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
            <div class="post-container" id="posts">
            <input type="text" id="description" class="post-text" placeholder="¿Qué estas pensando?" required="required">
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
  divElement.innerHTML = newsPage;
  const posts = divElement.querySelector('#post-Publish');

  onSnapshotFb((querySnapshot) => {
    let html = '';
    querySnapshot.forEach((doc) => {
      const dataPost = doc.data();
      /* console.log(doc.data()); */
      // doc.data transforma los datos de un objeto de firebase a un objeto de javascript
      html += `
    <form class='post-container'>
      <p class='email-post'>${dataPost.email} </p> 
      <p class='description-post' >${dataPost.description} 
      <p class='time-post'>${dataPost.createdAt} </p>
      <button data-id="${doc.id}" class='btn-delete'${dataPost.email === JSON.parse(localStorage.getItem('userEmail')).emailUser ? '' : 'disabled'}>Borrar</button>
      <button data-id="${doc.id}" class='btn-edit'${dataPost.email === JSON.parse(localStorage.getItem('userEmail')).emailUser ? '' : 'disabled'}>Editar</button>
      </form>
            `;
    });
    posts.innerHTML = html;
    const btnDelete = divElement.querySelectorAll('.btn-delete');
    btnDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        deletePost(dataset.id);
        /* console.log('me dieron click');
        console.log(JSON.parse(localStorage.getItem('userEmail'))); */
      });
    });
    const btnsEdit = divElement.querySelectorAll('.btn-edit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const doc = await getPost(e.target.dataset.id);
        const dataPost = doc.data();
        document.querySelector('.post-text').value = dataPost.description;
      });
    });
  });
  divElement.querySelector('#postSubmit').addEventListener('click', () => {
    const authorId = auth.currentUser;
    const inputDes = divElement.querySelector('#description').value;
    const todayDate = new Date();
    saveTask(inputDes, authorId.email, todayDate);
    /* window.location.href = '#/news'; */
    divElement.querySelector('#description').value = '';
    /* posts.innerHTML += inputDes; */
  });

  divElement.querySelector('#logOut').addEventListener('click', () => {
    signOutFirebase()
      .then(() => {
        window.location.href = '#/home';
      });
  });
  return divElement;
};
export default newsDisplay;

/* tasksContainer.innerHTML += `
      <div class="card card-body mt-2 border-primary">
    <h3 class="h5">${task.title}</h3>
    <p>${task.description}</p>
    <div>
      <button class="btn btn-primary btn-delete" data-id="${doc.id}">
        🗑 Delete
      </button>
      <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
        🖉 Edit
      </button>
    </div>
  </div>`; */
