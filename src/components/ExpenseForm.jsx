import React from "react";

const ExpenseForm = ({ setExpenses }) => {
  const onSubmitForm = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const date = formData.get("date");
    const item = formData.get("item");
    const amount = formData.get("amount");
    const content = formData.get("content");

    if (!date || !item || !amount || !content) {
      alert("내용을 입력해주세요!");
      return;
    }

    setExpenses((prev) => [...prev, { date, item, amount, content }]);

    event.target.reset();

    //해당월을 누르면 날짜가 해당월의 1월로 된다. 나중에 구현하기.
    //이거는 expensesbymonth와 연계하기
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        날짜
        <input type="date" name="date" />
        항목
        <input type="text" placeholder="지출 항목" name="item" />
        금액
        <input type="number" placeholder="지출 금액" name="amount" />
        내용
        <input type="text" placeholder="지출 내용" name="content" />
        <button type="submit">저장</button>
      </form>
    </>
  );
};

export default ExpenseForm;
