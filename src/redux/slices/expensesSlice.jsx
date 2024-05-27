import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialExpenses = [
  {
    id: "1",
    date: "2024-01-01",
    item: "외식",
    amount: 5800,
    content: "카페에서 따아...☕️",
  },
  {
    id: "2",
    date: "2024-01-03",
    item: "외식",
    amount: 12800,
    content: "카페에서 아아랑 케이크...🍰",
  },
  {
    id: "3",
    date: "2024-01-05",
    item: "식비",
    amount: 100000,
    content: "세광양대창",
  },
  {
    id: "4",
    date: "2024-01-10",
    item: "도서",
    amount: 40500,
    content: "모던 자바스크립트",
  },
  {
    id: "5",
    date: "2024-02-02",
    item: "식비",
    amount: 50000,
    content: "회식",
  },
  {
    id: "6",
    date: "2024-02-02",
    item: "간식",
    amount: 500,
    content: "아이스크림",
  },
  {
    id: "7",
    date: "2024-02-02",
    item: "여행",
    amount: 1055000,
    content: "일본여행",
  },
  {
    id: "8",
    date: "2024-02-02",
    item: "미용",
    amount: 155000,
    content: "미용실",
  },
  {
    id: "9",
    date: "2024-02-02",
    item: "도서",
    amount: 75000,
    content:
      "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발",
  },
];

//슬라이스 안에 객체
const expensesSlice = createSlice({
  name: "expenses",
  initialState: initialExpenses,
  reducers: {
    //이용한 함수
    addExpenses: (state, action) => {
      state.push(action.payload);
    },
  },
});

// const deleteExpense = () => {
//   if (confirm("정말로 삭제하시겠습니까?")) {
//     dispath(
//       setExpenses((prev) => [...prev.filter((expense) => expense.id !== id)])
//     );
//     alert("삭제되었습니다.");
//     navigate("/");
//   } else {
//     alert("삭제가 취소되었습니다.");
//   }
// };

//이용한 함수
export const { addExpenses } = expensesSlice.actions;
export default expensesSlice.reducer;