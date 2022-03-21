import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from "../../store";
import {CartStoreI, getCart} from "../../store/cartSlice";
import s from './s.module.css'
import Cart from "../../components/Cart";
import clsx from "clsx";

const CartPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const {
    loading,
    items,
    error,
  } = useSelector((store: RootState): CartStoreI => store.cart)

  useEffect(() => {
    dispatch(getCart())
  }, []);

  return (
    <div className={clsx("mainContainer", s.container)}>
      <div className={s.cartWrapper}>
        <Cart items={items} loading={loading}/>
      </div>
    </div>
  )
}

export default CartPage;
