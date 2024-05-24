import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ExpenseRecord from "./ExpenseRecord";
import ExpenseDetail from "./ExpenseDetail";
import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

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
  background-color: ${(props) => (props.$active ? "#027d02" : "#39e11b")};
  color: ${(props) => (props.$active ? "white" : "black")};
  border: none;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  box-shadow: 2px 2px 2px 2px #555555;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$active ? "#027d02" : "darkgray")};
    color: ${(props) => (props.$active ? "white" : "black")};
  }
`;

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const months = [...Array(12).keys()].map((month) => month + 1);

const ExpensesByMonth = () => {
  const { activeMonth, setActiveMonth } = useContext(ExpenseContext);

  const handleMonthClick = (month) => {
    setActiveMonth(month);
  };

  // 로컬 스토리지 연동
  useEffect(() => {
    localStorage.setItem("selectedMonth", activeMonth);
  }, [activeMonth]);

  return (
    <>
      {/* 12월 버튼 */}
      <ButtonContainer>
        {MONTHS.map((month) => (
          <MonthButton
            key={month}
            $active={activeMonth === month ? true : false}
            onClick={() => handleMonthClick(month)}
          >
            {" "}
            {month}월{" "}
          </MonthButton>
        ))}
      </ButtonContainer>
      {/* 선택사항- 레코드 */}
      <ExpenseRecord />
      {/* 디테일 폼 */}
      <ExpenseDetail />
    </>
  );
};

export default ExpensesByMonth;
