import {fakeRequest} from "./fakeRequest";


type FakeRequestT<T> = T


describe('fakeRequest', () => {

  it('should returned promise with passed data', done => {
    async function callback(promise: Promise<any>) {
      try {
        const data = await promise
        expect(data).toStrictEqual([1, 2, 3])
        done();
      } catch (error) {
        done(error);
      }
    }

    callback(fakeRequest((): FakeRequestT<number[]> => [1, 2, 3], 1000));
  })

})
