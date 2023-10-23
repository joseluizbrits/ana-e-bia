import styled from "styled-components";

export const Background = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;

  h1 {
    font-family: var(--title);
    font-weight: var(--bold);
    color: #fff;

    width: 100%;
    padding: 0 160px;
    margin-top: -120px;

    display: flex;
    justify-content: space-between;

    .text-1,
    .text-2 {
      display: grid;
      position: relative;

      p {
        grid-area: 1/1;
        transform: translate(0); // gambiarra (alternativa ao z-index)
      }

      .circle {
        border-radius: 50%;
        grid-area: 1/1;
        position: absolute;
      }
    }

    .text-1 p {
      font-size: 4.5rem;
      max-width: 14ch;
    }

    .text-1 .circle {
      width: 160px;
      height: 160px;
      top: 10%;
      left: 10%;
    }

    .text-2 {
      align-self: flex-end;
    }

    .text-2 p {
      font-size: 3rem;
      max-width: 18ch;
    }

    .text-2 .circle {
      width: 100px;
      height: 100px;
      top: 10%;
      right: 10%;
    }
  }

  @media screen and (max-width: 1500px) {
    h1 .text-1 p {
      font-size: 3.5rem;
    }

    h1 .text-2 p {
      font-size: 2rem;
    }

    h1 .text-2 .circle {
      transform: translate(160px, 0);
    }
  }

  @media screen and (max-width: 1200px) {
    h1 {
      margin-top: -240px;
    }

    h1 .text-2 {
      display: none;
    }
  }

  @media screen and (max-width: 720px) {
    h1 {
      padding: 0 40px;
    }

    h1 .text-1 p {
      font-size: 2.5rem;
    }

    h1 .text-1 .circle {
      transform: translate(64px, -32px);
    }
  }
`;
