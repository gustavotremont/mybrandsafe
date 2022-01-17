import React from "react";
import { shallow } from "enzyme";
import Divbrand from "./Divbrand";

describe("Divbrand", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Divbrand />);
    expect(wrapper).toMatchSnapshot();
  });
});
