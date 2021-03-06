import {put} from "redux-saga/effects"
import {setCart, setCartRequestError} from "../../store/cartSlice";
import {fakeRequest} from "../../libs/fakeRequest";
import {CartItemT} from "../../components/Cart/CartItem";

export function* getCartRequest() {
  try{
    const res: {items: CartItemT[]} = yield fakeRequest(() => require('../../API/cartItems.json'), 1000)
    yield put(setCart(res))
  } catch (e) {
    yield put(setCartRequestError((e as Error).message))
  }
}
