import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AddToCartForm from "./index";
import {Provider, useSelector} from "react-redux";
import {store} from "../../store";

configure({ adapter: new Adapter() })

const items = useSelector(state => state)

describe('<AddToCartForm />', () => {
  const wrapper = mount(
    <Provider store={store}>
      <AddToCartForm />
    </Provider>
  )

  it('is rendered', () => {
    console.log(items)
    expect(wrapper.find('form').length).toBe(1)
  })

  it('should contains a five input fields', () => {
    expect(wrapper.find('input').length).toBe(5)
  })
})
