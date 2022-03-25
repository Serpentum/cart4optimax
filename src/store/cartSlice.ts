import {createSlice} from "@reduxjs/toolkit";
import {CartItemT} from "../components/Cart/CartItem";


export interface CartStoreI {
  loading: boolean
  items: CartItemT[] | []
  error: string
}

export interface AddCartItemI {
  payload: CartItemT
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
    changeQuantity: (store, {payload}) => {
      store.items[payload.id].quantity = payload.amount
    },
    deleteItem: (store, {payload}) => {
      store.items = store.items.filter((el, id) => id !== payload.id)
    },
    addCartElement: (store, {payload}: AddCartItemI) => {
      store.items = [payload, ...store.items]
    }
  },
})

export const {
  getCart,
  setCart,
  setCartRequestError,
  changeQuantity,
  deleteItem,
  addCartElement,
} = cartSlice.actions

export default cartSlice.reducer
