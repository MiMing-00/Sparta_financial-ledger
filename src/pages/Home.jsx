import React, { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpensesByMonth from "../components/ExpensesByMonth";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const init = [
    {
      id: uuidv4(),
      date: "2024-01-01",
      item: "외식",
      amount: 5800,
      contect: "카페에서 따아...☕️",
    },
    {
      id: uuidv4(),
      date: "2024-01-03",
      item: "외식",
      amount: 12800,
      contect: "카페에서 아아랑 케이크...🍰",
    },
    {
      id: uuidv4(),
      date: "2024-01-05",
      item: "식비",
      amount: 100000,
      contect: "세광양대창",
    },
    {
      id: uuidv4(),
      date: "2024-01-10",
      item: "도서",
      amount: 40500,
      contect: "모던 자바스크립트",
    },
    {
      id: uuidv4(),
      date: "2024-02-02",
      item: "식비",
      amount: 50000,
      contect: "회식",
    },
    {
      id: uuidv4(),
      date: "2024-02-02",
      item: "간식",
      amount: 500,
      contect: "아이스크림",
    },
    {
      id: uuidv4(),
      date: "2024-02-02",
      item: "여행",
      amount: 1055000,
      contect: "일본여행",
    },
    {
      id: uuidv4(),
      date: "2024-02-02",
      item: "미용",
      amount: 155000,
      contect: "미용실",
    },
    {
      id: uuidv4(),
      date: "2024-02-02",
      item: "도서",
      amount: 75000,
      contect:
        "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발",
    },
  ];
  const [expenses, setExpenses] = useState([init]);

  return (
    <>
      <h1>ㄱ ㅏ ㄱ ㅖ ㅂ ㅜ</h1>
      <ExpenseForm setExpenses={setExpenses} />
      <ExpensesByMonth expenses={expenses} setExpenses={setExpenses} />
    </>
  );
};

export default Home;
