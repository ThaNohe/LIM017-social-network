export default () => {
  const newsFeed = `
  <section class="header">
        <nav class="header-nav">
            <div class="logos-container">
                <img src="../img/logo-news.png" alt="logo" class="logo">
            </div>

            <div class="nav-containaer">
                <div for="check" class="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <input type="search" class="search-nav" id="search" placeholder="Search...">

                <div for="check" class="search">
                    <a href="#/home">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    </a>
                </div>
            </div>
        </nav>
    </section>
    <div class="conten-animegang">
        <section class="profile-container">
 
            <div class="options-profile">
                <i class="fa-solid fa-user"></i>
                Mi Perfil
            </div>
            <div class="options-profile">
                <i class="fa-solid fa-user-group"></i>
                Grupos
            </div>
            <div class="options-profile">
                <i class="fa-solid fa-video"></i>
                Video
            </div>

            <div>
                ___________________
            </div>
            <div class="options-profile">
                Tus accesos directos
            </div>
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

            <div class="post-container">
                <input type="text" class="post-text" placeholder="¿Qué estas pensando?">
                <div class="button-post"> 
                    <button class="post-comment">Publicar</button>
                </div>
                
            </div>

        </section>
    </div>
    `;
  const divElement = document.createElement('div');
  divElement.innerHTML = newsFeed;
  return divElement;
};
