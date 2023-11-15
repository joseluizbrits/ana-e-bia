import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --title:  'Quicksand', sans-serif;
    --text:  'Montserrat', sans-serif;
    --regular: 400;
    --medium: 500;
    --semibold: 600;
    --bold: 700;
    --gradient: linear-gradient(to right, #DB3A5F, #E84E72);
    --p8: #9C0024;
    --p7: #BA183E;
    --p6: #DB3A5F;
    --p5: #FF6488;
    --p4: #FF96AE;
    --p3: #FFB6C7;
    --p2: #FFD2DD;
    --p1: #FFE7ED;
    --circleScale: 1;
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

  /* ---------- SCROLLBAR ---------- */

  *::-webkit-scrollbar,
  body::-webkit-scrollbar,
  html::-webkit-scrollbar {
    background: var(--p3);
    width: 20px;
    height: 20px;
  }

  *::-webkit-scrollbar-thumb,
  body::-webkit-scrollbar-thumb,
  html::-webkit-scrollbar-thumb {
    background: var(--p4);
    border-radius: 20px;
    border: 5px solid var(--p3);
  }

  *::-webkit-scrollbar-thumb:hover,
  body::-webkit-scrollbar-thumb:hover,
  html::-webkit-scrollbar-thumb:hover {
    background: var(--p5);
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

  input, textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none;
  }

  input:focus, textarea:focus {
    border: none;
    box-shadow: none;
    outline-style: none;
  }

  /* --------- CIRCLE ANIMATION ---------- */

  @keyframes randomMoveOne {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(10px, 20px);
    }
    50% {
      transform: translate(-5px, -10px);
    }
    75% {
      transform: translate(5px, 20px);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes randomMoveTwo {
    0% {
      transform: translate(0, 0);
    }
    30% {
      transform: translate(-5px, 10px);
    }
    60% {
      transform: translate(5px, -5px);
    }
    80% {
      transform: translate(-10px, 10px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

export default GlobalStyle;
