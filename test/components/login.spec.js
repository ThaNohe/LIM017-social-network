import { signInWithEmailAndPassword } from '../../src/lib/firebaseFunctions.js';

import { loginWithEmail } from '../../src/lib/functionsController.js';

jest.mock('../../src/lib/firebaseFunctions.js');

// auth del login usuario ya registrado

describe('parametros pasan por LOGIN function', () => {
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
});
