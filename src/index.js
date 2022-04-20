import login from './components/login.js';

import register from './components/register.js';

import newsFeed from './components/news.js';

const components = {
  Login: login,
  Register: register,
  Newsfeed: newsFeed,
};

export const changeView = (route) => {
  const buttonHome = document.getElementById('btnJoinUs');
  buttonHome.addEventListener('click', () => {
    const welcomePage = document.getElementById('welcomePage');
    welcomePage.style.display = 'none';
  });

  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '#/login':
    { return container.appendChild(components.Login()); }
    case '#/register':
    { return container.appendChild(components.Register()); }
    case '#/news':
    { return container.appendChild(components.Newsfeed()); }
    default:
      break;
  }
  return console.log(route);
};
