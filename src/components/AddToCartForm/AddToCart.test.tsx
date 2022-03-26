import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AddToCartForm from "./index";
import {Provider} from "react-redux";
import {store} from "../../store";

configure({ adapter: new Adapter() })

describe('<AddToCartForm />', () => {
  const wrapper = mount(
    <Provider store={store}>
      <AddToCartForm />
    </Provider>
  )

  it('be rendered', () => {
    expect(wrapper.find('form').length).toBe(1)
  })

  it('should contains a five input fields', () => {
    expect(wrapper.find('input').length).toBe(5)
  })
})
