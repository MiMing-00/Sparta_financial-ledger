import React, { Children } from "react";
import styled from "styled-components";

const LayoutDisplay1 = styled.div`
  height: auto;
  width: 80%;
  background-color: #97da97;
  padding: 2rem;
  text-align: center;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return <LayoutDisplay1>{children}</LayoutDisplay1>;
};

export default Layout;
