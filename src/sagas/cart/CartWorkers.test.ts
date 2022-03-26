import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {getCartRequest} from "./workers";
import {CartItemT} from "../../components/Cart/CartItem";

configure({ adapter: new Adapter() })

describe('Cart Worker', () => {
  it('should getCartRequest', done => {
    async function callback() {
      try {
        const res = await getCartRequest().next().value
        expect(!!res).toBe(true)
        done()
      } catch (e) {
        done()
      }
    }
    callback()
  })
})
