import { takeEvery } from 'redux-saga/effects';
import {getCart} from "../../store/cartSlice";
import {getCartRequest} from "./workers";

export function* watcherCart() {
  yield takeEvery(getCart, getCartRequest);
}
