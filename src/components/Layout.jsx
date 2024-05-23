import React, { Children } from "react";
import styled from "styled-components";

const LayoutDisplay1 = styled.div`
  height: 100vh;
  max-width: 1280px;
  background-color: #97da97;
  padding: 2rem;
  text-align: center;
`;

const LayoutDisplay2 = styled.div`
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <LayoutDisplay1>
      <LayoutDisplay2>{children}</LayoutDisplay2>
    </LayoutDisplay1>
  );
};

export default Layout;
