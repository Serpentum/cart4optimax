import {createSlice} from "@reduxjs/toolkit";
import {CartI} from "../sagas/cart/workers";

export interface CartStoreI {
  loading: boolean
  items: CartI | []
  error: string
}

const initialState: CartStoreI = {
  items: [],
  loading: false,
  error: ''
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCart: (store) => {
      store.loading = true
    },
    setCart: (store, {payload}) => {
      store.items = payload.items
      store.loading = false
      store.error = ''
    },
    setCartRequestError: (store, {payload}) => {
      store.items = initialState.items
      store.loading = initialState.loading
      store.error = payload
    },
    increase: ({items}, {payload}) => {
      console.log(payload)
    }
  },
})

export const {
  getCart,
  setCart,
  increase,
  setCartRequestError
} = cartSlice.actions

export default cartSlice.reducer
