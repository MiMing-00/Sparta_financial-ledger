import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ExpensesContain = styled.div`
  background-color: white;
  margin: 20px auto;
  padding: 20px;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const ExpensesUpdateForm = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ExpensesUpdateInput = styled.input`
  width: 95%;
  padding: 10px;
  margin: 10px 0;
  text-align: left;
  justify-content: left;
  display: block;

  border: 1px solid #97da97;
  border-radius: 5px;
`;

const ButtonCotain = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: auto 10px auto auto;
`;

const Button = styled.button`
  background-color: ${(props) => props.$backgroundColor};
  border: none;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  width: 100px;

  &:hover {
    color: white;
  }
`;

const Expenses = ({ expenses }) => {
  const { id } = useParams();

  const targetExpense = expenses.find((expense) => expense.id === id);

  return (
    <ExpensesContain>
      <ExpensesUpdateForm>
        <label htmlFor="date">날짜:</label>
        <ExpensesUpdateInput
          type="date"
          name="date"
          id="date"
          placeholder="YYYY-MM-DD"
          value={targetExpense.date}
        />
        <label htmlFor="text">항목:</label>
        <ExpensesUpdateInput
          type="text"
          placeholder="지출 항목"
          name="item"
          value={targetExpense.item}
        />
        <label htmlFor="number">금액:</label>
        <ExpensesUpdateInput
          type="number"
          placeholder="지출 금액"
          name="amount"
          value={targetExpense.amount}
        />
        <label htmlFor="text">내용:</label>
        <ExpensesUpdateInput
          type="text"
          placeholder="지출 내용"
          name="content"
          value={targetExpense.content}
        />
        <ButtonCotain>
          <Button type="submit" $backgroundColor="#39e11b">
            수정
          </Button>
          <Button $backgroundColor="#e53b3b">삭제</Button>
          <Button $backgroundColor="#0060fac0">뒤로 가기</Button>
        </ButtonCotain>
      </ExpensesUpdateForm>
    </ExpensesContain>
  );
};

export default Expenses;
