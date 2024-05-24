import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  #root, body {
    margin: 0 auto;
    height: 100vh;
    max-width: 1280px;
    min-width: 800px;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    text-align: center;
  }
    `;

//배경은 잡아줘야 해서 100% 쓰고 픽셀로 잡고,
// 안에 있는 컴포넌트는 내부 영역이라 마진이랑 패딩을 주면 안에서 안 벗어남...
//
export default GlobalStyles;
