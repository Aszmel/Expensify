import React from "react";
import { shallow } from "enzyme";
import { ExpensesList } from "../../components/ExpensesList";
import expenses from "../fixtures/expenses";
// import toJSON from "enzyme-to-json";

test("should render ExpensesList with expenses", () => {
  const wrapper = shallow(<ExpensesList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpensesList with empty message", () => {
  const wrapper = shallow(<ExpensesList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
