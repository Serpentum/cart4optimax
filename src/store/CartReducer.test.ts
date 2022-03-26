import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import cartReducer, {
  addCartElement,
  changeQuantity,
  deleteItem,
  getCart,
  setCart,
  setCartRequestError
} from './cartSlice'

configure({ adapter: new Adapter() })

describe('Cart reducer', () => {
  it('should getCart', () => {
    const store = cartReducer(undefined, getCart())
    expect(store.loading).toBe(true)
    expect(!store.items.length).toBe(true)
    expect(store.error).toEqual('')
  })
  it('should setCart', () => {
    const store = cartReducer(undefined, setCart({items: [
        {
          id: 0,
          productId: 0,
          productName: 'test',
          description: 'test',
          quantity: 1,
          price: 100,
          img: '',
        }
      ]}))
    expect(!!store.items.length).toBe(true)
    expect(store.loading).toBe(false)
    expect(store.error).toEqual('')
  })
  it('should setCartRequestError', () => {
    const store = cartReducer(undefined, setCartRequestError('test error'))
    expect(store.error).toEqual('test error')
    expect(store.loading).toBe(false)
    expect(!store.items.length).toBe(true)
  })
  it('should changeQuantity', () => {
    const store = cartReducer(undefined, setCart({items: [
        {
          id: 0,
          productId: 0,
          productName: 'test',
          description: 'test',
          quantity: 1,
          price: 100,
          img: '',
        }
      ]}))
    expect(store.items[0].quantity).toEqual(1)
    const newStore = cartReducer(store, changeQuantity({id: 0, amount: 2}))
    expect(newStore.items[0].quantity).toEqual(2)
  })
  it('should deleteItem', () => {
    const store = cartReducer(undefined, setCart({items: [
        {
          id: 0,
          productId: 0,
          productName: 'test',
          description: 'test',
          quantity: 1,
          price: 100,
          img: '',
        }
      ]}))
    expect(store.items.length).toBe(1)
    const newStore = cartReducer(store, deleteItem({id: 0}))
    expect(newStore.items.length).toBe(0)
  })
  it('should addCartElement', () => {
    const store = cartReducer(undefined, {type: ''})
    expect(store.items.length).toBe(0)
    const newStore = cartReducer(store, addCartElement({
      id: 0,
      productId: 0,
      productName: 'test',
      description: 'test',
      quantity: 1,
      price: 100,
      img: '',
    }))
    expect(newStore.items.length).toBe(1)
  })
})
