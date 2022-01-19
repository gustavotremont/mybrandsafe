import React from "react";
import { shallow } from "enzyme";
import HeroSteps from "./HeroSteps";

describe("HeroSteps", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HeroSteps />);
    expect(wrapper).toMatchSnapshot();
  });
});
