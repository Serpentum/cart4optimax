import {put} from "redux-saga/effects"
import {setCart, setCartRequestError} from "../../store/cartSlice";
import {fakeRequest} from "../../libs/fakeRequest";
import {CartItemT} from "../../components/Cart/CartItem";

export function* getCartRequest() {
  try{
    const res: CartItemT[] = yield fakeRequest(() => require('../../API/cartItems.json'), 2500)
    yield put(setCart(res))
  } catch (e) {
    yield put(setCartRequestError((e as Error).message))
  }
}
