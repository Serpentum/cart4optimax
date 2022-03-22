import React, {ChangeEvent, memo} from 'react';
import s from './s.module.css'
import clsx from "clsx";
import AmountController from "../AmountController/AmountController";
import {useDispatch} from "react-redux";
import {changeQuantity, deleteItem} from "../../store/cartSlice";
import Trash from '../../assets/ico/trashBin'

export type CartItemT = {
  id?: number
  productId: number
  productName: string
  quantity: number
  price: number
  img: string
}

const CartItem = ({
  id,
  productId,
  productName,
  price,
  img,
  quantity
}: CartItemT) => {

  const dispatch = useDispatch()

  const handleChange = (newVal?: number) => {
    dispatch(changeQuantity({id, amount: newVal}))
  }

  const handleDelete = () => {
    dispatch(deleteItem({id}))
  }

  return (
    <div className={s.itemContainer}>
      <div onClick={handleDelete}>
        <Trash/>
      </div>
      <div className={s.imgWrapper}>
        <img className={s.img} src={img} alt={`${productName} model`}/>
      </div>
      <div className={clsx(s.section, s.info)}>
        <header className={s.header}>
          <div className={s.headerInfo}>
            <p><span className="boldModifier">Model: </span>{productName}</p>
            <p><span className="boldModifier">Price: </span>{price}$</p>
          </div>
          <div onClick={handleDelete}>
            <Trash/>
          </div>
        </header>
        <p>
          <span className="boldModifier">Description: </span>
          <span className={s.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque dolore ea error facere fugit ipsa laborum, molestias necessitatibus nihil obcaecati officia officiis pariatur provident, quas quidem sit voluptate voluptatem.
          </span>
        </p>
        <div className={s.control}>
          <AmountController value={quantity} setter={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default memo(CartItem);
