import React, {CSSProperties} from 'react';
import s from './s.module.css'
import clsx from "clsx";

export interface DefaultBtnI {
  label: string
  onClick: () => void
  customStyle?: CSSProperties
  tabIndex?: number
}

const DefaultBtn = ({label, onClick, customStyle, tabIndex}: DefaultBtnI) => {
  return (
    <div
      className={clsx(s.container)}
      style={customStyle}
      tabIndex={tabIndex || 0}
      onClick={onClick}
      onKeyDown={e => e.key === "Enter" && onClick()}
    >
      <span className={s.label}>{label}</span>
    </div>
  );
};

export default DefaultBtn;
