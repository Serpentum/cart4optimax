import React, {ChangeEvent, CSSProperties, useEffect, useState} from 'react';
import s from './s.module.css'
import Button from "../UI/Button";

export interface AmountControllerI {
  value: number
  setter: (newValue?: number) => void
}

const customBtnJSS: CSSProperties = {
  padding: 0,
  width: 30,
  height: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

export const onChangeCurtCounters = (e: ChangeEvent<HTMLInputElement>, setter: (x: number) => void) => {
  const toNum = Number(e.currentTarget.value)
  setter(toNum)
}

const AmountController = ({value, setter}: AmountControllerI): JSX.Element => {

  const [localVal, setLocalVal] = useState<number>(value)

  const increase = () => {
    if(Number(value) + 1 < 100) {
      setter(Number(value) + 1)
    }
  }
  const decrease = () => {
    if(Number(value) - 1 > 0) {
      setter(Number(value) - 1)
    }
  }

  const onBlur = () => {
    if(localVal > 99) {
      setter(99)
      return
    }
    if(localVal <= 0) {
      setter(1)
      return
    }
    setter(localVal)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => onChangeCurtCounters(e, setter)

  useEffect(() => {
    setLocalVal(value)
  }, [value])

  return (
    <div className={s.container}>
      <Button.Default
        label={"+"}
        onClick={increase}
        customStyle={customBtnJSS}
      />
      <input
        className={s.input}
        type="number"
        value={localVal}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Button.Default
        label={"-"}
        onClick={decrease}
        customStyle={customBtnJSS}
      />
    </div>
  );
};

export default AmountController;
