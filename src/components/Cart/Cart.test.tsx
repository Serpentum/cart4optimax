import {configure, mount, ReactWrapper, shallow, ShallowWrapper} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Cart from './index'
import React from "react";
import Preloader from "../Preloader";
import EmptyCart from "../../assets/ico/emptyCart";
import CartItem, {CartItemT} from "./CartItem";

configure({ adapter: new Adapter() })

type WrapperConstructorMountI = (items: CartItemT[], loading: boolean) => ReactWrapper
type WrapperConstructorShallowI = (items: CartItemT[], loading: boolean) => ShallowWrapper

describe('<Cart />', () => {

  const getMountWrapper: WrapperConstructorMountI = (items, loading) =>
    mount(<Cart items={items} loading={loading} />)

  const getShallowWrapper: WrapperConstructorShallowI = (items, loading) =>
    shallow(<Cart items={items} loading={loading} />)

  it('be render as empty, without loading', () => {
    expect(getShallowWrapper([], false).find(EmptyCart).length).toBe(1)
  })
  it('be render as empty, with loading', () => {
    expect(getShallowWrapper([], true).find(Preloader).length).toBe(1)
  })
  it('be render with items, without loading', () => {
    const wrapper = getShallowWrapper([
      {
        id: 0,
        price: 100,
        img: '',
        quantity: 1,
        productName: 'test product',
        description: 'test description',
        productId: 123
      }
    ], false)
    expect(wrapper.find(CartItem).length).toBe(1)
    expect(wrapper.find('.controlMain').length).toBe(1)
  })
  it('be render with items, with loading', () => {
    const wrapper = getShallowWrapper([
      {
        id: 0,
        price: 100,
        img: '',
        quantity: 1,
        productName: 'test product',
        description: 'test description',
        productId: 123
      }
    ], true)
    expect(wrapper.find(CartItem).length).toBe(1)
    expect(wrapper.find('.controlMain').length).toBe(1)
    expect(wrapper.find(Preloader).length).toBe(1)
  })
})
