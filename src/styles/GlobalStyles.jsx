import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  #root, body {
    margin: 0 auto;
    min-height: 100vh;
    max-width: 1280px;
    min-width: 800px;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    text-align: center;
  }
    `;

export default GlobalStyles;
