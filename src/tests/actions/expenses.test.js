import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should set up remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should edit expense action object", () => {
  const action = editExpense("456cde", { note: "note new value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "456cde",
    updates: { note: "note new value" }
  });
});

test("should set up add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "Last month rent"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("should set up add expense object with default values", () => {
  const defaultValues = {
    description: "",
    amount: 0,
    createdAt: 0,
    note: ""
  };
  const action = addExpense(defaultValues);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...defaultValues,
      id: expect.any(String)
    }
  });
});
