import React from "react";
import { shallow } from "enzyme";
import FormSteps from "./FormSteps";

describe("FormSteps", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormSteps />);
    expect(wrapper).toMatchSnapshot();
  });
});
