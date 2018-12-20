//react-test-renderer
//later -> added enzyme, raf
import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";
// import toJSON from "enzyme-to-json"; ***added serializer to jest.config.json
// import ReactShallowRenderer from "react-test-renderer/shallow";

// commented out due to using * enzyme * now
// test("test render Header correctly", () => {
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header />);
//   expect(renderer.getRenderOutput()).toMatchSnapshot();
// });

test("should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  // expect(toJSON(wrapper)).toMatchSnapshot(); *** no need to use it with serializer

  // expect(wrapper.find("h1").length).toBe(1);
  // expect(wrapper.find("h1").text()).toBe("Expensify");
});
