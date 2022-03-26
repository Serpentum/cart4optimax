import {createSlice} from "@reduxjs/toolkit";
import {CartItemT} from "../components/Cart/CartItem";


export interface CartStoreI {
  loading: boolean
  items: CartItemT[] | []
  error: string
}
export interface setCartI {
  payload: {
    items: CartItemT[]
  }
}
export interface setCartRequestErrorI {
  payload: string
}
export interface ChangeQuantityI {
  payload: {
    id: number
    amount: number
  }
}
export interface DeleteItemI {
  payload: {
    id: number
  }
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
    setCart: (store, {payload}: setCartI) => {
      store.items = [...store.items, ...payload.items]
      store.loading = false
      store.error = initialState.error
    },
    setCartRequestError: (store, {payload}: setCartRequestErrorI) => {
      store.items = initialState.items
      store.loading = initialState.loading
      store.error = payload
    },
    changeQuantity: (store, {payload}: ChangeQuantityI) => {
      store.items[payload.id].quantity = payload.amount
    },
    deleteItem: (store, {payload}: DeleteItemI) => {
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
