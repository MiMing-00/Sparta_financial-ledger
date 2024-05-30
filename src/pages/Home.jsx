import React from "react";
import ExpensesForm from "../components/ExpensesForm";
import ExpensesByMonth from "../components/ExpensesByMonth";

const Home = () => {
  return (
    <>
      <h1> 조그만 가계부 </h1>
      <ExpensesForm />
      <ExpensesByMonth />
    </>
  );
};

export default Home;
