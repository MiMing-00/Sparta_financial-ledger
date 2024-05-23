import React from "react";
import styled from "styled-components";

const RecordContain = styled.div`
  background-color: white;
  border: none;
  border-radius: 5px;
  width: 90%;
  margin: 20px auto;
  padding: 10px;
`;

const ExpenseRecord = () => {
  return (
    <RecordContain>
      여기 선택사항임 월별 총 지출과 항목별 지출 비율을 시각적으로 확인하기
    </RecordContain>
  );
};

export default ExpenseRecord;
