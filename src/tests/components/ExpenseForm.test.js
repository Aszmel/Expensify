import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import toJSON from "enzyme-to-json";
import expenses from "../fixtures/expenses";

test("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render ExpenseForm with expenses", () => {
  const wrapper = shallow(<ExpenseForm expenses={expenses[1]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
