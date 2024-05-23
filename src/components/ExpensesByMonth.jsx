import React from "react";
import ExpensesButton from "./ExpensesButton";
import ExpenseRecord from "./ExpenseRecord";
import ExpenseDetail from "./ExpenseDetail";

const ExpensesByMonth = () => {
  return (
    <>
      <ExpensesButton />
      <ExpenseRecord />
      <ExpenseDetail />
    </>
  );
};

export default ExpensesByMonth;
