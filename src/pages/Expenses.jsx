import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removeExpense, updateExpenses } from "../redux/slices/expensesSlice";
import { useRef } from "react";

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
  box-shadow: 2px 2px 2px 2px #555555;

  &:hover {
    color: white;
  }
`;

const Expenses = () => {
  const expenses = useSelector((state) => state.expenses);
  const dispath = useDispatch();

  const { id } = useParams();
  const navigate = useNavigate();

  const targetExpense = expenses.find((expense) => expense.id === id);

  const dateInput = useRef();
  const itemInput = useRef();
  const amountInput = useRef();
  const contentInput = useRef();

  // 인풋 박스 업데이트 하는 로직
  // setExpenses로 expense를 바꾼 다음에 홈으로 가서 바꾼 거 보여줘야 한다.
  const onSubmitUpdateForm = (event) => {
    event.preventDefault();

    const updatedFormData = {
      id: targetExpense.id,
      date: dateInput.current.value,
      item: itemInput.current.value,
      amount: amountInput.current.value,
      content: contentInput.current.value,
    };

    // 유효성 검사1
    if (
      updatedFormData.date == targetExpense.date &&
      updatedFormData.item == targetExpense.item &&
      updatedFormData.amount == targetExpense.amount &&
      updatedFormData.content == targetExpense.content
    ) {
      alert("수정된 내용이 없습니다.");
      return;
    }

    //유효성 검사2 아 한글 쓰고ㅓ 숫자 쓰고 그런 것도 장ㅂ아야 하는데 ㅜ
    if (
      !updatedFormData.date ||
      !updatedFormData.item ||
      !updatedFormData.amount ||
      !updatedFormData.content
    ) {
      alert("내용을 모두 기재해주세요!");
      return;
    }

    dispath(updateExpenses(updatedFormData));
    alert("수정되었습니다.");
    navigate("/");
  };

  // 삭제 함수
  const deleteExpense = (id) => {
    if (confirm("정말로 삭제하시겠습니까?")) {
      dispath(removeExpense(id));
      alert("삭제되었습니다.");
      navigate("/");
    } else {
      alert("삭제가 취소되었습니다.");
    }
  };

  return (
    <ExpensesContain>
      <ExpensesUpdateForm onSubmit={onSubmitUpdateForm}>
        <label htmlFor="date">날짜:</label>
        <ExpensesUpdateInput
          type="date"
          name="date"
          id="date"
          placeholder="YYYY-MM-DD"
          defaultValue={targetExpense.date}
          ref={dateInput}
        />
        <label htmlFor="text">항목:</label>
        <ExpensesUpdateInput
          type="text"
          placeholder="지출 항목"
          name="item"
          defaultValue={targetExpense.item}
          ref={itemInput}
        />
        <label htmlFor="number">금액:</label>
        <ExpensesUpdateInput
          type="number"
          placeholder="지출 금액"
          name="amount"
          defaultValue={targetExpense.amount}
          ref={amountInput}
        />
        <label htmlFor="text">내용:</label>
        <ExpensesUpdateInput
          type="text"
          placeholder="지출 내용"
          ref={contentInput}
          defaultValue={targetExpense.content}
        />
        <ButtonCotain>
          <Button type="submit" $backgroundColor="#39e11b">
            수정
          </Button>
          <Button
            onClick={() => deleteExpense(targetExpense.id)}
            $backgroundColor="#e53b3b"
          >
            삭제
          </Button>
          <Button onClick={() => navigate("/")} $backgroundColor="#0060fac0">
            뒤로 가기
          </Button>
        </ButtonCotain>
      </ExpensesUpdateForm>
    </ExpensesContain>
  );
};
export default Expenses;
