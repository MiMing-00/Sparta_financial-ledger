import React, { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpensesByMonth from "../components/ExpensesByMonth";
import { v4 as uuidv4 } from "uuid";

const Home = ({ expenses, setExpenses }) => {
  return (
    <>
      <h1>ㄱ ㅏ ㄱ ㅖ ㅂ ㅜ</h1>
      <ExpenseForm setExpenses={setExpenses} />
      <ExpensesByMonth expenses={expenses} setExpenses={setExpenses} />
    </>
  );
};

export default Home;
