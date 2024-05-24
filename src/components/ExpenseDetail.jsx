import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ExpenseContext } from "../context/ExpenseContext";

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
  box-shadow: 2px 2px 2px 2px rgba(78, 120, 97, 0.3);

  &:hover {
    box-shadow: 4px 4px 15px 5px rgba(98, 134, 115, 0.3);
    transform: translateY(-0.25rem);
    transition: transform 0.2s ease-in-out;
  }
  & {
    transform: translateY(0);
    transition: transform 0.2s ease-in-out;
  }
`;

const ExpenseDetailDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 0;
  align-items: flex-start;
  margin: 2px;
  gap: 10px;
  overflow: hidden;
`;

const ExpenseDetailspan1 = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap; // 자동 줄바꿈 방지
  max-width: 100%;
`;

const ExpenseDetailspan2 = styled.span`
  justify-content: flex-end;
  margin: auto;
  gap: 3px;
`;

const ExpenseDetail = () => {
  const { expenses, activeMonth } = useContext(ExpenseContext);

  const filteredExpenses = expenses.filter(
    (expense) => parseInt(expense.date.split("-")[1]) === activeMonth
  );

  return (
    <ExpenseDetailContain>
      {/* 여기서 누르면 상세 페이지로 넘어가야 함~~{" "} */}
      {filteredExpenses.map(({ id, date, item, amount, content }) => (
        <Link
          to={`/expenses/${id}`}
          key={id}
          style={{ textDecoration: "none", color: "black" }}
        >
          <ExpenseDetailDiv1>
            <ExpenseDetailDiv2>
              <span>{date}</span>
              <ExpenseDetailspan1>
                {item} - {content}
              </ExpenseDetailspan1>
            </ExpenseDetailDiv2>
            <ExpenseDetailspan2>{amount} 원</ExpenseDetailspan2>
          </ExpenseDetailDiv1>{" "}
        </Link>
      ))}
    </ExpenseDetailContain>
  );
};

export default ExpenseDetail;
