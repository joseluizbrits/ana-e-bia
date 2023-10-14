import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --title:  'Quicksand', sans-serif;
    --text:  'Montserrat', sans-serif;
    --regular: 400;
    --medium: 500;
    --semibold: 600;
    --bold: 700;
    --p8: #9C0024;
    --p7: #BA183E;
    --p6: #DB3A5F;
    --p5: #FF6488;
    --p4: #FF96AE;
    --p3: #FFB6C7;
    --p2: #FFD2DD;
    --p1: #FFE7ED;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    outline: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  ol, ul {
    list-style: none;
  }

  input:focus, textarea:focus {
    border: none;
    box-shadow: none;
    outline-style: none;
  }
  
`;

export default GlobalStyle;
