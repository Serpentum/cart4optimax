import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cartSlice from './cartSlice'
import createSagaMiddleware from 'redux-saga'
import watchersRootSaga from "../sagas";


// init middlewares
const sagaMiddleware = createSagaMiddleware()

// combine reducers
const rootReducer = combineReducers({
  cart: cartSlice
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(sagaMiddleware),
})

sagaMiddleware.run(watchersRootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
