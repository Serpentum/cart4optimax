import {put} from "redux-saga/effects"
import {setCart, setCartRequestError} from "../../store/cartSlice";
import {fakeRequest} from "../../libs/fakeRequest";

export type CartItemT = {
  productId: number
  productName: string
  quantity: number
  price: number
  img: string
}

export interface CartI {
  items: CartItemT[]
}

export function* getCartRequest() {
  try{
    const res: CartI = yield fakeRequest(() => require('../../API/cartItems.json'), 1000)
    yield put(setCart(res))
  } catch (e) {
    yield put(setCartRequestError((e as Error).message))
  }
}
