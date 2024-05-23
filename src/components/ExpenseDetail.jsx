import React from "react";
import styled from "styled-components";

const ExpenseDetailContain = styled.div`
  background-color: white;
  width: 90%;
  margin: 20px auto;
  padding: 10px;
`;

const ExpenseDetail = () => {
  return (
    <ExpenseDetailContain>
      여기서 누르면 상세 페이지로 넘어가야 함~~{" "}
    </ExpenseDetailContain>
  );
};

export default ExpenseDetail;
