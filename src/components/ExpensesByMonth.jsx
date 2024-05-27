import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ExpenseRecord from "./ExpenseRecord";
import ExpenseDetail from "./ExpenseDetail";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setActiveMonth } from "../redux/slices/activeMonthSlice";

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

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const ExpensesByMonth = () => {
  const activeMonth = useSelector((state) => state.activeMonth);
  const dispath = useDispatch();

  const handleMonthClick = (month) => {
    dispath(setActiveMonth(month));
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
      {/* 선택사항- 레코드
      <ExpenseRecord /> */}
      {/* 디테일 폼 */}
      <ExpenseDetail />
    </>
  );
};

export default ExpensesByMonth;
