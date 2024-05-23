import React from "react";
import { Link } from "react-router-dom";
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
  border: 1px solid #97da97;
  border-radius: 5px;
`;

const ExpenseDetailDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: flex-start;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 2px;
  gap: 10px;
`;

const ExpenseDetailspan1 = styled.span`
  justify-content: flex-end;
  margin: auto;
  gap: 3px;
`;

const ExpenseDetail = ({ setExpenses, expenses }) => {
  return (
    <ExpenseDetailContain>
      {/* 여기서 누르면 상세 페이지로 넘어가야 함~~{" "} */}
      {expenses.map(({ id, date, item, amount, content }) => (
        <Link to={`/expenses/${id}`} key={id}>
          <ExpenseDetailDiv1>
            <ExpenseDetailDiv2>
              <span>{date}</span>
              <span>
                {item} - {content}
              </span>
            </ExpenseDetailDiv2>
            <ExpenseDetailspan1>{amount} 원</ExpenseDetailspan1>
          </ExpenseDetailDiv1>{" "}
        </Link>
      ))}
    </ExpenseDetailContain>
  );
};

export default ExpenseDetail;
