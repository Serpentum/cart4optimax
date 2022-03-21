import {all} from 'redux-saga/effects'
import {watcherCart} from "./cart/watchers";

export default function* watchersRootSaga() {
  yield all ([
    watcherCart()
  ])
}
