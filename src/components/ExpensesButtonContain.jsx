import React from "react";
import styled from "styled-components";

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
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$active ? "#027d02" : "#39e11b")};
    color: ${(props) => (props.$active ? "black" : "white")};
  }
`;

const ExpensesButtonContain = ({ activeIndex, handleMonthClick, months }) => {
  return (
    <>
      <ButtonContainer>
        {months.map((month, index) => (
          <MonthButton
            key={index}
            $active={activeIndex === index}
            onClick={() => handleMonthClick(index)}
          >
            {" "}
            {month}월{" "}
          </MonthButton>
        ))}
      </ButtonContainer>
      <ExpenseRecord />
      <ExpenseDetail expenses={expenses} setExpenses={setExpenses} />
    </>
  );
};

export default ExpensesButtonContain;
