import React from "react";
import {Control, Controller} from "react-hook-form";
import {RenderInput, RenderInputDataI} from './render'

export interface InputPropI extends RenderInputDataI{
  control: any
  name: string
}

const Input = (props: InputPropI): JSX.Element => (
  <Controller
    name={props.name}
    control={props.control}
    render={({ field: { onChange, value } }) => (
      <RenderInput
        value={value}
        onChange={onChange}
        {...props}
      />
    )}
  />
)

export default Input;
