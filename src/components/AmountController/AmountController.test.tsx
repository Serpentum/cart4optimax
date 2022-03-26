import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AmountController from "./index";

configure({ adapter: new Adapter() })

const setter = (value:number | undefined) => value
const initial = {
  value: 0,
  setter
}

describe('<AmountController />', () => {
  const wrapper = mount(<AmountController {...initial} />)

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('be rendered', () => {
    expect(wrapper.find('div>input[type="number"]').length).toBe(1)
  })

  it('should increase', () => {
    let value = 1
    const changeValue = jest.fn(val => {value = val});
    const wrapper = mount(<AmountController value={value} setter={changeValue} />);
    wrapper.find('div>#increaseBtn').simulate("click")
    expect(changeValue).toBeCalled();
    expect(value).toEqual(2)
  })

  it('should decrease', () => {
    let value = 2
    const changeValue = jest.fn(val => {value = val});
    const wrapper = mount(<AmountController value={value} setter={changeValue} />);
    wrapper.find('div>#decreaseBtn').simulate("click")
    expect(changeValue).toBeCalled();
    expect(value).toEqual(1)
  })

  it('should not start setter if val > 99', () => {
    let value = 99
    const changeValue = jest.fn(val => {value = val});
    const wrapper = mount(<AmountController value={value} setter={changeValue} />);
    wrapper.find('div>#increaseBtn').simulate("click")
    expect(changeValue).toBeCalledTimes(0);
    expect(value).toEqual(99)
  })

  it('should not start setter if val < 1', () => {
    let value = 1
    const changeValue = jest.fn(val => value= val);
    const wrapperMounted = mount(<AmountController value={value} setter={changeValue} />);
    wrapperMounted.find('div>#decreaseBtn').simulate("click")
    expect(changeValue).toBeCalledTimes(0);
    expect(value).toEqual(1)
  })
})

