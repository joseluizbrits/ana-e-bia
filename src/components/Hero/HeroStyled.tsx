import styled from "styled-components";
import img from "../../assets/img-hero.jpg";

export const Background = styled.section`
  width: 100%;
  height: 100vh;
  background: url(${img}) center center;
  background-size: cover;

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

    .one,
    .two {
      display: grid;

      p {
        grid-area: 1/1;
        transform: translate(0); // gambiarra (alternativa ao z-index)
      }

      .circle {
        background: var(--p4);
        border-radius: 50%;
        grid-area: 1/1;
      }
    }

    .one p {
      font-size: 4.5rem;
      max-width: 14ch;
    }

    .one .circle {
      width: 160px;
      height: 160px;
      transform: translate(120px, -32px);
    }

    .two {
      align-self: flex-end;
    }

    .two p {
      font-size: 3rem;
      max-width: 18ch;
    }

    .two .circle {
      width: 100px;
      height: 100px;
      transform: translate(360px, 32px);
    }
  }

  @media screen and (max-width: 1500px) {
    h1 .one p {
      font-size: 3.5rem;
    }

    h1 .two p {
      font-size: 2rem;
    }

    h1 .two .circle {
      transform: translate(160px, 0);
    }
  }

  @media screen and (max-width: 1200px) {
    h1 {
      margin-top: -240px;
    }

    h1 .two {
      display: none;
    }
  }

  @media screen and (max-width: 720px) {
    h1 {
      padding: 0 40px;
    }

    h1 .one p {
      font-size: 2.5rem;
    }

    h1 .one .circle {
      transform: translate(64px, -32px);
    }
  }
`;
