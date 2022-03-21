import React from 'react';
import s from './s.module.css'
import {CartI} from "../../sagas/cart/workers";

export interface CartPropI {
  items: CartI | []
  loading: boolean
}

const Cart = ({items, loading}: CartPropI): JSX.Element => {
  return (
    <div className={s.container}>

    </div>
  );
};

export default Cart;
