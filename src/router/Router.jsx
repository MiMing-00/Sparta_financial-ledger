import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Layout from "../components/Layout";

const Router = () => {
  return (
    <BrowserRouter basename="/Sparta_financial-ledger/">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;