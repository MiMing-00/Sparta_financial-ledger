import React from "react";
import styled from "styled-components";

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

    setExpenses((prev) => [...prev, { date, item, amount, content }]);

    event.target.reset();

    //해당월을 누르면 날짜가 해당월의 1월로 된다. 나중에 구현하기.
    //이거는 expensesbymonth와 연계하기
  };
  const inputs = ["날짜", "항목", "금약", "내용"];

  return (
    <FormContainer>
      <form onSubmit={onSubmitForm}>
        날짜
        <Input type="date" name="date" />
        항목
        <Input type="text" placeholder="지출 항목" name="item" />
        금액
        <Input type="number" placeholder="지출 금액" name="amount" />
        내용
        <Input type="text" placeholder="지출 내용" name="content" />
        <FormButton type="submit">저장</FormButton>
      </form>
    </FormContainer>
  );
};

export default ExpenseForm;