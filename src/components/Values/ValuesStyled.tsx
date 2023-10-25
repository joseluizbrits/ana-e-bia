import styled from "styled-components";

export const ValuesStyled = styled.section`
  background: var(--p5);

  .card {
    background: var(--p6);
    margin: 0 7% 0 7%;
    border-radius: 50px;
  }

  .card .wrapp {
    padding: 7%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
  }

  .card .wrapp p {
    font-family: var(--title);
    font-size: clamp(1.25rem, 2vw, 2.5rem);
    line-height: 1.5em;
    letter-spacing: 0.05rem;
    color: var(--p1);

    grid-column: span 2;
  }

  .card .wrapp ul {
    padding: 12%;
    display: flex;
    flex-direction: column;
    gap: 28px;

    hr {
      border: 1px solid var(--p7);
      opacity: 0.3;
    }
  }

  .card .wrapp ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-family: var(--title);
      font-size: clamp(0.75rem, 1.5vw, 1.5vw);
      color: var(--p4);
    }

    svg {
      width: clamp(12px, 1vw, 24px);
      opacity: 0.6;
    }
  }

  .card .wrapp .cookie {
    width: clamp(200px, 100%, 700px);
    padding-right: 5%;

    grid-area: 2/2;

    position: absolute;
    top: -40px;
    z-index: 1;
  }

  .card .wrapp .born {
    font-family: var(--title);
    font-size: clamp(1.25rem, 2vw, 2rem);
    line-height: 1.5em;
    letter-spacing: 0.05rem;
    color: var(--p1);

    padding-bottom: 40px;
    grid-area: 4;

    display: flex;
    gap: 24px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 16px;

    & :nth-child(1) {
      font-size: clamp(2rem, 4vw, 4rem);
      font-weight: var(--semibold);
      color: var(--p8);
    }

    & :nth-child(2) {
      font-size: clamp(1rem, 2vw, 2rem);
      font-weight: var(--semibold);
      color: var(--p5);
    }
  }

  @media screen and (max-width: 1400px) {
    .card .wrapp ul {
      gap: 20px;
    }

    .card .wrapp .cookie {
      top: -100px;
    }

    .logo {
      gap: 8px;

      :nth-child(1) {
        font-size: clamp(1.25rem, 3.25vw, 4rem);
      }
      :nth-child(2) {
        font-size: clamp(0.75rem, 1.5vw, 4rem);
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .card .wrapp ul {
      gap: 16px;
    }

    .card .wrapp .cookie {
      top: -150px;
    }
  }

  @media screen and (max-width: 900px) {
    .card .wrapp {
      grid-template-columns: 1fr;
    }

    .card .wrapp .cookie {
      top: -25px;
      right: 30px;
    }

    .card .wrapp .born {
      gap: 16px;
    }
  }

  @media screen and (max-width: 600px) {
    .card .wrapp {
      padding: 11%;
    }

    .card .wrapp ul {
      padding: 15% 0;
      gap: 12px;
    }

    .card .wrapp .cookie {
      display: none;
    }
  }
`;
