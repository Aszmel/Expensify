import React from "react";
import { connect } from "react-redux";

const ExpensesList = props => (
  <div>
    <h1>Expenses List</h1>
    {props.filters.text}
    {props.expenses.length}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpensesList);
