import React from "react";
import Home from "../pages/Home";
import Expenses from "../pages/Expenses";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../redux/config/configStore";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expenses/:id" element={<Expenses />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default Router;
