import React, {ChangeEvent, useEffect} from 'react';
import s from './s.module.css'
import {UIContainer} from "../UI/Container";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Input from "../Fields/Input";
import Button from "../UI/Button";
import clsx from "clsx";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup";
import {CartItemT} from "../Cart/CartItem";
import {nanoid} from "nanoid";
import {useDispatch, useSelector} from "react-redux";
import {addCartElement, CartStoreI} from "../../store/cartSlice";
import {RootState} from "../../store";

const AddToCartForm = () => {

  const dispatch = useDispatch()
  const {
    items,
  } = useSelector((store: RootState): CartStoreI => store.cart)

  const schema = yup.object().shape({
    productName: yup.string().required('This field is required'),
    price: yup.string().required('This field is required'),
    quantity: yup.number().required('This field is required'),
    description: yup.string().required('This field is required'),
  })

  const {control, handleSubmit, watch, setValue, formState: {errors}} = useForm<{
    quantity: number
    img: string
    productName: string
    price: number
    description: string
    productId: string
  }>({
    defaultValues: {
      img: "",
      quantity: 1,
      productName: "",
      price: 0,
      description: "",
      productId: nanoid()
    },
    resolver: yupResolver(schema)
  })

  const checkStartCount = () => {
    Number(watch('quantity')) <= 0 && setValue('quantity', 1)
    Number(watch('quantity')) > 99 && setValue('quantity', 99)
  }

  const checkPrice = () => {
    Number(watch('price')) <= 0 && setValue('price', 0)
  }


  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const {
      img,
      quantity,
      productName,
      price,
      description,
      productId,
    } = data

    const item: CartItemT = {
      id: items.length,
      img,
      quantity,
      productName,
      price,
      description,
      productId,
    }

    dispatch(addCartElement(item))
  }

  return (
    <UIContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.section}>
          <h3>Try to create you item here:</h3>
          <div className={s.row}>
            <Input className={s.customInput} control={control} name={"img"} label={"Image URI"} error={errors}/>
          </div>
          <div className={s.row}>
            <Input className={s.customInputMini} control={control} name={"productName"} label={"Model"} error={errors}/>
            <Input
              type={"number"}
              className={s.customInputMini}
              control={control}
              name={"price"}
              label={"Price"}
              error={errors}
              onBlur={checkPrice}
            />
            <Input
              type={"number"}
              className={s.customInputMini}
              control={control}
              name={"quantity"}
              label={"Start quantity"}
              onBlur={checkStartCount}
              error={errors}
            />
          </div>
          <div className={s.row}>
            <Input className={s.customInput} control={control} name={"description"} label={"Description"}
                   error={errors}/>
          </div>
          <div className={clsx(s.row, s.control)}>
            <Button.Default label={'Continue'} onClick={() => {
            }}/>
          </div>
        </div>
      </form>
    </UIContainer>
  );
};

export default AddToCartForm;
