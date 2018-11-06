import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Header from "../components/Header";
import NotFound from "../components/NotFound";
import Help from "../components/Help";
import EditExpense from "../components/EditExpense";
import AddExpense from "../components/AddExpense";
import ExpenseDashboard from "../components/ExpenseDashboard";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
