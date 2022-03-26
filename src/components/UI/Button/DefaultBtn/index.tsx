import React, {CSSProperties} from 'react';
import s from './s.module.css'
import clsx from "clsx";

export interface DefaultBtnI {
  label: string
  onClick: () => void
  id?: string,
  customStyle?: CSSProperties
  tabIndex?: number
  type?: "button" | "submit"
}

const DefaultBtn = ({
                      label,
                      onClick,
                      customStyle,
                      tabIndex,
                      type = "submit",
                      id
}: DefaultBtnI) => {
  return (
    <button
      id={id}
      className={clsx(s.container)}
      type={type}
      style={customStyle}
      tabIndex={tabIndex || 0}
      onClick={onClick}
      onKeyDown={e => e.key === "Enter" && onClick()}
    >
      <span className={s.label}>{label}</span>
    </button>
  );
};

export default DefaultBtn;
