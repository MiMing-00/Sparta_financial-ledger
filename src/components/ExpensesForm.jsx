import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addExpenses } from "../redux/slices/expensesSlice";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 120px;
  align-items: flex-start;
  gap: 3px;
`;

const ExpensesForm = () => {
  const dispatch = useDispatch();

  const onSubmitExpensesForm = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const date = formData.get("date");
    const item = formData.get("item");
    const amount = formData.get("amount");
    const content = formData.get("content");

    if (!date || !item || !amount || !content) {
      Swal.fire({
        title: "내용을 입력해주세요✨",
        text: "각 항목에 맞는 내용을 기입해주세요.",
      });
      return;
    }

    dispatch(
      addExpenses({
        id: uuidv4(),
        date,
        item,
        amount,
        content,
      })
    );
    Swal.fire({
      title: "✨저장되었습니다✨",
    });

    event.target.reset();
  };

  return (
    <form className="form-contain" onSubmit={onSubmitExpensesForm}>
      <InputBox>
        <label htmlFor="date">날짜</label>
        <input type="date" id="date" placeholder="YYYY-MM-DD" name="date" />
      </InputBox>
      <InputBox>
        <label htmlFor="item">항목</label>
        <input type="text" id="item" placeholder="지출 항목" name="item" />
      </InputBox>
      <InputBox>
        <label htmlFor="amount">금액</label>
        <input
          type="number"
          id="amount"
          placeholder="지출 금액"
          name="amount"
        />
      </InputBox>
      <InputBox>
        <label htmlFor="content">내용</label>
        <input
          type="text"
          id="content"
          placeholder="지출 내용"
          name="content"
        />
      </InputBox>
      <button type="submit">저장</button>
    </form>
  );
};

export default ExpensesForm;
