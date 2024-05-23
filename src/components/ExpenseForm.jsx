import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const FormContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 20px auto;
  width: 90%;
  justify-items: center;
  align-items: center;
  background-color: white;
`;

const Input = styled.input`
  border: 1px solid #39e11b;
  margin: 5px;
  padding: 5px;
`;

const FormButton = styled.button`
  background-color: #027d02;
  border: none;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #39e11b;
    color: white;
  }
`;

const ExpenseForm = ({ setExpenses }) => {
  const onSubmitForm = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const date = formData.get("date");
    const item = formData.get("item");
    const amount = formData.get("amount");
    const content = formData.get("content");

    if (!date || !item || !amount || !content) {
      alert("내용을 입력해주세요!");
      return;
    }

    setExpenses((prev) => [
      ...prev,
      { id: uuidv4(), date, item, amount, content },
    ]);

    event.target.reset();
  };

  return (
    <FormContainer>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="date">날짜:</label>
        <Input type="date" name="date" id="date" placeholder="YYYY-MM-DD" />
        <label htmlFor="text">항목:</label>
        <Input type="text" placeholder="지출 항목" name="item" />
        <label htmlFor="number">금액:</label>
        <Input type="number" placeholder="지출 금액" name="amount" />
        <label htmlFor="text">내용:</label>
        <Input type="text" placeholder="지출 내용" name="content" />
        <FormButton type="submit">저장</FormButton>
      </form>
    </FormContainer>
  );
};

export default ExpenseForm;
