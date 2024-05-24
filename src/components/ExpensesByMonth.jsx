import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ExpenseRecord from "./ExpenseRecord";
import ExpenseDetail from "./ExpenseDetail";

const ButtonContainer = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 90%;
  margin: 20px auto;
`;

const MonthButton = styled.button`
  background-color: ${(props) => (props.$active ? "#39e11b" : "#027d02")};
  color: ${(props) => (props.$active ? "white" : "black")};
  border: none;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  box-shadow: 2px 2px 2px 2px #555555;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$active ? "#027d02" : "#39e11b")};
    color: ${(props) => (props.$active ? "black" : "white")};
  }
`;

const ExpensesByMonth = ({ expenses, setExpenses }) => {
  const initialMonth = localStorage.getItem("selectedMonth")
    ? parseInt(localStorage.getItem("selectedMonth")) - 1
    : 1;

  const [activeIndex, setActiveIndex] = useState(initialMonth);

  const handleMonthClick = (index) => {
    setActiveIndex(index);
  };

  const months = [...Array(12).keys()].map((month) => month + 1);

  // 로컬 스토리지 연동
  useEffect(() => {
    localStorage.setItem("selectedMonth", activeIndex + 1);
  }, [activeIndex]);

  return (
    <>
      {/* 12월 버튼 */}
      <ButtonContainer>
        {months.map((month, index) => (
          <MonthButton
            key={index}
            $active={activeIndex === index ? true : false}
            onClick={() => handleMonthClick(index)}
          >
            {" "}
            {month}월{" "}
          </MonthButton>
        ))}
      </ButtonContainer>
      {/* 선택사항- 레코드 */}
      <ExpenseRecord />
      {/* 디테일 폼 */}
      <ExpenseDetail
        expenses={expenses.filter(
          (expense) => parseInt(expense.date.split("-")[1]) === activeIndex + 1
        )}
      />
    </>
  );
};

export default ExpensesByMonth;
