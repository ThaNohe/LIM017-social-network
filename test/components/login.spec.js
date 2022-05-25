import { signInWithEmailAndPassword } from '../../src/lib/firebaseFunctions.js';

import login from '../../src/components/login.js';

// import { loginWithEmail } from '../../src/lib/functionsController.js';

jest.mock('../../src/lib/firebaseFunctions.js');

describe('Login function toma parametros ingresados', () => {
  beforeEach(() => signInWithEmailAndPassword.mockClear());
  it('funcion signIn de Firebase se ejecuta e inicia sesion', () => {
    document.body.innerHTML = '<section id="container"></section>';
    const components = { Login: login };
    const container = document.getElementById('container');
    container.appendChild(components.Login());
    document.getElementById('login-email').value = 'testing@aol.com';
    document.getElementById('login-password').value = 'zzxxyy';
    const btnLogin = document.getElementById('loginBtn');
    btnLogin.dispatchEvent(new Event('click'));
    // console.log(signInWithEmailAndPassword.mock.calls[0]);
    /*     expect(document.getElementById('login-email').value).toEqual('testing@aol.com');
    expect(document.getElementById('login-password').value).toEqual('zzxxyy'); */
    expect(signInWithEmailAndPassword.mock.calls[0]).toEqual([{}, 'testing@aol.com', 'zzxxyy']);
  });
});

// auth del login usuario ya registrado

/* describe('parametros pasan por LOGIN function', () => {
  // beforeEach(() => signInWithEmailAndPassword.mockClear());
  // eslint-disable-next-line arrow-body-style
  it('usuario se logea correctamente', () => {
    return loginWithEmail('janedoe@gmail.com', 'passw')
      .then((userCredential) => {
        expect(userCredential.user.email).toBe('janedoe@gmail.com');
        expect(signInWithEmailAndPassword.mock.calls[0])
          .toEqual([{ _id: 'get-auth' }, 'janedoe@gmail.com', 'passw']);
      // done();
      });
  });
}); */
