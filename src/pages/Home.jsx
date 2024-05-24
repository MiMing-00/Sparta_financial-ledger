import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpensesByMonth from "../components/ExpensesByMonth";
import styled from "styled-components";

const H1 = styled.h1`
  font-weight: 900;
  align-items: center;
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <H1>🧮 가계부 🧮</H1>
      <ExpenseForm />
      <ExpensesByMonth />
    </>
  );
};

export default Home;
