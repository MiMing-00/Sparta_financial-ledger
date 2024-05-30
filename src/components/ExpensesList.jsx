import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListBox = styled.div`
  border: 2px solid blanchedalmond;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px #858383;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  cursor: pointer;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const ExpensesList = ({ activeMonth }) => {
  const expenses = useSelector((state) => state.expenses);

  const filterExpenese = expenses.filter(
    (expense) => parseInt(expense.date.split("-")[1]) === activeMonth
  );

  return (
    <>
      <div className="list-contain">
        {filterExpenese.map(({ id, date, item, content, amount }) => (
          <Link
            to={`/detail/${id}`}
            key={id}
            style={{ color: "black", textDecoration: "none" }}
          >
            <ListBox>
              <div className="list-box1">
                <span>{date}</span>
                <span className="list-box2">
                  {item} - {content}
                </span>
              </div>
              <span> {amount} 원</span>
            </ListBox>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ExpensesList;
