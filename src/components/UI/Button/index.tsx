import React from 'react';
import DefaultBtn, {DefaultBtnI} from "./DefaultBtn";

export interface ButtonI {
  Default: (props: DefaultBtnI) => JSX.Element
}


const Button: ButtonI = {
  Default: DefaultBtn,
};

export default Button;
