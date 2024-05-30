import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ExpensesList from "./ExpensesList";

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${(props) =>
    props.$active ? "blanchedalmond" : "#dad1c8212"};
  cursor: pointer;
  width: 104px;
  height: 60px;
  padding: 20px;

  &:hover {
    background-color: ${(props) =>
      props.$active ? "blanchedalmond" : "blanchedalmond"};
  }
`;

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const initialMonth = localStorage.getItem("selectedMonth")
  ? parseInt(localStorage.getItem("selectedMonth"))
  : 1;

const ExpensesByMonth = () => {
  const [activeMonth, setActiveMonth] = useState(initialMonth);

  const onClickHandler = (month) => {
    setActiveMonth(month);
  };

  useEffect(() => {
    localStorage.setItem("selectedMonth", activeMonth);
  }, [activeMonth]);

  return (
    <>
      <div className="button-contain">
        {MONTHS.map((month) => (
          <Button
            key={month}
            $active={activeMonth === month}
            onClick={() => onClickHandler(month)}
          >
            {month}월
          </Button>
        ))}
      </div>
      <ExpensesList activeMonth={activeMonth} />
    </>
  );
};

export default ExpensesByMonth;
