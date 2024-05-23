import React, { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpensesByMonth from "../components/ExpensesByMonth";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [expenses, setExpenses] = useState([
    {
      id: uuidv4(),
      date: "2024-01-01",
      item: "외식",
      amount: 5800,
      contect: "카페에서 따아...☕️",
    },
    {
      id: uuidv4(),
      date: "2024-01-03",
      item: "외식",
      amount: 12800,
      contect: "카페에서 아아랑 케이크...🍰",
    },
  ]);
  return (
    <>
      <h1>ㄱ ㅏ ㄱ ㅖ ㅂ ㅜ</h1>
      <ExpenseForm setExpenses={setExpenses} />
      <ExpensesByMonth />
    </>
  );
};

export default Home;
