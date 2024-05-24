import React from "react";
import Home from "../pages/Home";
import Expenses from "../pages/Expenses";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import { ExpensesProvider } from "../context/ExpenseContext";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <ExpensesProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/expenses/:id" element={<Expenses />} />
            </Routes>
          </Layout>
        </ExpensesProvider>
      </BrowserRouter>
    </>
  );
};

export default Router;
