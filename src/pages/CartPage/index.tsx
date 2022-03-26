import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from "../../store";
import {CartStoreI, getCart} from "../../store/cartSlice";
import s from './s.module.css'
import Cart from "../../components/Cart";
import clsx from "clsx";
import AddToCartForm from "../../components/AddToCartForm";

const CartPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const {
    loading,
    items,
  } = useSelector((store: RootState): CartStoreI => store.cart)

  useEffect(() => {
    dispatch(getCart())
  }, []);

  return (
    <div className={clsx("mainContainer", s.container)}>
      <div className={s.cartWrapper}>
        <AddToCartForm />
        <Cart items={items} loading={loading}/>
      </div>
    </div>
  )
}

export default CartPage;
