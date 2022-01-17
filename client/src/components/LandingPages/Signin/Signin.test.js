import React from "react";
import { shallow } from "enzyme";
import Signin from "./Signin";

describe("Signin", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Signin />);
    expect(wrapper).toMatchSnapshot();
  });
});
