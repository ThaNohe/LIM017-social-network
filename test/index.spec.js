// importamos la funcion que vamos a testear
import { changeView } from '../src/index.js';
import home from '../src/components/home.js';

jest.mock('../src/lib/authFunctions.js');

describe('changeView', () => {
  it('debería ser una función', () => {
    expect(typeof changeView).toBe('function');
  });
  it('changeView recibe un path home y devuelve el componente', () => {
    document.body.innerHTML = '<section id="container"></section>';
    const result = changeView('#/home');
    expect(result).toEqual(home());
  });
});
