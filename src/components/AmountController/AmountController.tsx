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

const AmountController = ({value, setter}: AmountControllerI): JSX.Element => {

  const [localVal, setLocalVal] = useState<number>(value)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const toNum = Number(e.currentTarget.value)
    if(toNum <= 0) {
      setLocalVal(1)
      return
    }
    if(toNum >= 99) {
      setLocalVal(99)
      return
    }
    setLocalVal(toNum)
  }

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
    setter(localVal)
  }

  useEffect(() => {
    setLocalVal(value)
  }, [value])

  return (
    <div className={s.container}>
      <Button.Default tabIndex={1} label={"+"} onClick={increase} customStyle={customBtnJSS} />
      <input tabIndex={1} className={s.input} type="text" value={localVal} onChange={onChange} onBlur={onBlur}/>
      <Button.Default tabIndex={1} label={"-"} onClick={decrease} customStyle={customBtnJSS} />
    </div>
  );
};

export default AmountController;
