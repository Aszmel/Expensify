import React from "react";
import ExpensesList from "./ExpensesList";
import ExpenseListFilter from "./ExpenseListFilter";

const ExpenseDashboard = () => (
  <div>
    <ExpenseListFilter />
    <ExpensesList />
  </div>
);

export default ExpenseDashboard;
