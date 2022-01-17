import React from "react";
import { shallow } from "enzyme";
import Singin from "./Singin";

describe("Singin", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Singin />);
    expect(wrapper).toMatchSnapshot();
  });
});
