import React, {useMemo, useState} from 'react';
import {nanoid} from "nanoid";
import s from './s.module.css'
import clsx from "clsx";
import {FieldErrors} from "react-hook-form";

export interface RenderInputDataI {
  name: string
  label?: string
  className?: string
  onBlur?: () => void
  type?: "text" | "number"
  error?: FieldErrors
}

export interface RenderInputI extends RenderInputDataI{
  value: string | number
  onChange: () => void
}

export const RenderInput = ({
  label,
  name,
  value,
  onChange,
  className,
  onBlur,
  type,
  error,
}: RenderInputI) => {

  const id = useMemo(nanoid, [])
  const [isFocus, setIsFocus] = useState<boolean | null>(null)

  return (
    <div className={clsx(s.container, className, {
      [s.containerFocused]: isFocus || !!String(value).length,
    })}>
      {
        label && (
          <label htmlFor={id} className={clsx(s.label, {
            [s.labelFocused]: isFocus === true || !!String(value).length,
          })}>
            {label}
          </label>
        )
      }
      <input
        id={id}
        name={name}
        type={type}
        value={
          type === 'number'
            ? String(value).length > 1
              ? String(value).replace(/^0*/, '')
              : value
            : value
        }
        onChange={onChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => {
          setIsFocus(false)
          onBlur && onBlur()
        }}
        className={clsx(s.input, {
          [s.inputError]: (error && error[name]),
        })}
      />
      {
        (error && error[name]) &&
        <p className={s.error}>{error[name].message}</p>
      }
    </div>
  );
};
