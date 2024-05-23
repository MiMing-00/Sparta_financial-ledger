import React from "react";
import styled from "styled-components";

const ExpenseDetailContain = styled.div`
  background-color: white;
  width: 90%;
  margin: 20px auto;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

const ExpenseDetailDiv1 = styled.div`
  display: flex;
  width: 90%;
  margin: 20px auto;
  padding: 10px;
  border: 1px solid;
  border-radius: 5px;
`;

const ExpenseDetail = ({ setExpenses, expenses }) => {
  return (
    <ExpenseDetailContain>
      {/* 여기서 누르면 상세 페이지로 넘어가야 함~~{" "} */}
      {/* 필터 써서 해당 월만 보이게 해야 하네 그 전에 필터로 넘겨줘도 될 듯 근데 해당 월인 거 어캐 알지 */}
      {expenses.map(({ id, date, item, amount, contect }) => (
        <ExpenseDetailDiv1 key={id}>
          <p>{date}</p>
          <p>
            {item} - {contect}
          </p>
          <p>{amount}</p>
        </ExpenseDetailDiv1>
      ))}
    </ExpenseDetailContain>
  );
};

export default ExpenseDetail;
