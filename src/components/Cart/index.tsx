import React, {memo, useEffect, useState} from 'react';
import s from './s.module.css'
import CartItem, {CartItemT} from "./CartItem";
import clsx from "clsx";
import Preloader from "../Preloader";
import Button from "../UI/Button";

import EmptyCart from '../../assets/ico/emptyCart'
import {nanoid} from "nanoid";
import {UIContainer} from "../UI/Container";

export interface CartPropI {
  items: CartItemT[] | []
  loading: boolean
}

const Cart = ({items, loading}: CartPropI): JSX.Element => {

  const [total, setTotal] = useState<number>(0)

  useEffect((): void => {
    if(items.length) {
      setTotal([...items].reduce((acc: number, el: CartItemT): number => (Number(acc) + (Number(el.price) * el.quantity)), 0))
    }
  }, [items]);

  return (
    <UIContainer>
      <div className={clsx(s.wrapper, {
        [s.loaderAlign]: loading || !items.length,
        [s.itemsAlign]: items.length > 0
      })}>
        {
          !loading
            ? items.map((item, id) => <CartItem key={item.productId} {...item} id={id}/>)
            : <Preloader />
        }
        {
          !!items.length && (
            <div className={s.control}>
              <span>Total: {total.toFixed(2)}$</span>
              <Button.Default label={'Continue'} onClick={() => {}}/>
            </div>
          )
        }
        {
          (!items.length && !loading) && (
            <div className={s.empty}>
              <EmptyCart />
              <p>...Oh no! Cart is empty.</p>
            </div>
          )
        }
      </div>
    </UIContainer>
  );
};

export default Cart;
