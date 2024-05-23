import React from "react";
import ExpensesButton from "./ExpensesButton";

const ExpensesByMonth = () => {
  return (
    <>
      <ExpensesButton />
      <div>이 밑에는 그거 딸칵하면 연동돼서 월별 총 지출 내역이 보임</div>
      <div>그 밑에는 이제 월별로 세부내역이 보임</div>
    </>
  );
};

export default ExpensesByMonth;
