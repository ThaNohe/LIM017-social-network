// importamos la funcion que vamos a testear
import { changeView } from '../src/index.js';
import home from '../src/components/home.js';
import register from '../src/components/register.js';
import login from '../src/components/login.js';
import news from '../src/components/news.js';

jest.mock('../src/lib/firestoreFunctions.js');

describe('changeView recibe un path y devuelve el componente', () => {
  it('devuelve componente HOME', () => {
    document.body.innerHTML = '<section id="container"></section>';
    const result = changeView('#/home');
    expect(result).toEqual(home());
  });
  it('devuelve componente REGISTER', () => {
    document.body.innerHTML = '<section id="container"></section>';
    const result = changeView('#/register');
    expect(result).toEqual(register());
  });
  it('devuelve componente LOGIN', () => {
    document.body.innerHTML = '<section id="container"></section>';
    const result = changeView('#/login');
    expect(result).toEqual(login());
  });
  it('devuelve componente NEWS', () => {
    document.body.innerHTML = '<section id="container"></section>';
    const result = changeView('#/news');
    console.log(result);
    console.log(news());
    expect(result).toEqual(news());
  });
});
