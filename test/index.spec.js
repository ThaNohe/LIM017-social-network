// importamos la funcion que vamos a testear
import { changeView } from '../src/index.js';
import home from '../src/components/home.js';
import register from '../src/components/register.js';
import login from '../src/components/login.js';
import news from '../src/components/news.js';

jest.mock('../src/lib/authFunctions.js');

describe('changeView', () => {
  it('changeView recibe un path HOME y devuelve el componente', () => {
    document.body.innerHTML = '<section id="container"></section>';
    const result = changeView('#/home');
    expect(result).toEqual(home());
  });
  it('changeView recibe un path REGISTER y devuelve el componente', () => {
    document.body.innerHTML = '<section id="container"></section>';
    const result = changeView('#/register');
    expect(result).toEqual(register());
  });
  it('changeView recibe un path LOGIN y devuelve el componente', () => {
    document.body.innerHTML = '<section id="container"></section>';
    const result = changeView('#/login');
    expect(result).toEqual(login());
  });
  it('changeView recibe un path NEWS y devuelve el componente', () => {
    document.body.innerHTML = '<section id="container"></section>';
    const result = changeView('#/news');
    expect(result).toEqual(news());
  });
});
