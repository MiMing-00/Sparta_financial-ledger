import React from "react";
import ExpensesButtonContain from "./ExpensesButtonContain.jsx";
import { useState, useEffect } from "react";

const ExpensesByMonth = ({ expenses, setExpenses }) => {
  const [activeIndex, setActiveIndex] = useState("");

  const handleMonthClick = (index) => {
    setActiveIndex(index);
  };

  const months = [...Array(12).keys()].map((month) => month + 1);

  // 로컬 스토리지랑 연결
  // useEffect() => {
  //   localStorage.setItem("selectedMonth", activeIndex);
  //   }
  // }, [activeIndex];

  return (
    <>
      <ExpensesButtonContain
        activeIndex={activeIndex}
        handleMonthClick={handleMonthClick}
        months={months}
      />
    </>
  );
};

export default ExpensesByMonth;
