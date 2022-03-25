import React from 'react';
import s from './s.module.css'

export interface UIContainerI {
  children: JSX.Element,
  className?: string
}

export const UIContainer = ({children, className}: UIContainerI) => (
  <div className={s.container}>
    {children}
  </div>
)
