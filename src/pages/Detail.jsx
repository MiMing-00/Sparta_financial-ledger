import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { removeExpenses, updateExpenses } from "../redux/slices/expensesSlice";

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 120px;
  align-items: flex-start;
  gap: 3px;
  margin-inline-end: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-top: 5px;
  width: 65vw;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.$danger ? "#ff4d4d" : "#007bff")};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.$danger ? "#cc0000" : "#0056b3")};
  }
`;

const Detail = () => {
  const expenses = useSelector((state) => state.expenses);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const targetExpenseValue = expenses.find((expense) => expense.id === id);

  // 인풋 박스 작동 로직
  const onSubmitDetailForm = (event) => {
    event.preventDefault();

    const formData2 = new FormData(event.target);

    const formObject = {
      id: targetExpenseValue.id,
      date: formData2.get("date"),
      item: formData2.get("item"),
      amount: formData2.get("amount"),
      content: formData2.get("content"),
    };

    if (
      !formObject.date ||
      !formObject.item ||
      !formObject.amount ||
      !formObject.content
    ) {
      Swal.fire({
        title: "내용을 입력해주세요✨",
        text: "각 항목 내용을 기입해주세요.",
      });
      return;
    }

    if (
      formObject.date == targetExpenseValue.date &&
      formObject.item == targetExpenseValue.item &&
      formObject.amount == targetExpenseValue.amount &&
      formObject.content == targetExpenseValue.content
    ) {
      Swal.fire({
        title: "내용을 수정해주세요✨",
        text: "이전과 달라진 내용이 없습니다.",
      });
      return;
    }

    dispatch(updateExpenses(formObject));
    Swal.fire({
      title: "✨수정되었습니다✨",
    }).then(() => {
      navigate("/");
    });
  };

  // 삭제 로직
  const deleteExpenses = () => {
    Swal.fire({
      title: "정말로 삭제하시겠습니까?",
      text: "다시 되돌릴 수 없습니다!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        //삭제 로직
        dispatch(removeExpenses(id));
        //삭제 알럿
        Swal.fire({
          title: "삭제되었습니다!",
          text: "지출 내역이 삭제되었습니다.",
          icon: "success",
        });
        navigate("/");
      }
    });
  };

  return (
    <form className="detail-form-contain" onSubmit={onSubmitDetailForm}>
      <InputBox>
        <label htmlFor="date">날짜</label>
        <Input
          type="date"
          id="date"
          placeholder="YYYY-MM-DD"
          name="date"
          defaultValue={targetExpenseValue.date}
        />
      </InputBox>
      <InputBox>
        <label htmlFor="item">항목</label>
        <Input
          type="text"
          id="item"
          placeholder="지출 항목"
          name="item"
          defaultValue={targetExpenseValue.item}
        />
      </InputBox>
      <InputBox>
        <label htmlFor="amount">금액</label>
        <Input
          type="number"
          id="amount"
          placeholder="지출 금액"
          name="amount"
          defaultValue={targetExpenseValue.amount}
        />
      </InputBox>
      <InputBox>
        <label htmlFor="content">내용</label>
        <Input
          type="text"
          id="content"
          placeholder="지출 내용"
          name="content"
          defaultValue={targetExpenseValue.content}
        />
      </InputBox>
      <div className="button-contain">
        <Button type="submit">수정</Button>
        <Button type="button" onClick={deleteExpenses} $danger={true}>
          삭제
        </Button>
        <Button type="button" onClick={() => navigate("/")}>
          뒤로 가기
        </Button>
      </div>
    </form>
  );
};

export default Detail;
