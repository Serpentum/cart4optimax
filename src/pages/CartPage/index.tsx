import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from "../../store";
import {getCart} from "../../store/cartSlice";
import s from './s.module.css'

const CartPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const {
    loading,
    items,
    error,
  } = useSelector((store: RootState) => store.cart)

  useEffect(() => {
    dispatch(getCart())
  }, []);

  return (
    <div className={s.container}>
    </div>
  )
}

export default CartPage;
