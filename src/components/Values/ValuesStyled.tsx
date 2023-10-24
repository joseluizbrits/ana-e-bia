import styled from "styled-components";

export const ValuesStyled = styled.section`
  background: var(--p5);

  .card {
    background: var(--p6);
    margin: 0 7% 0 7%;
    border-radius: 50px;
  }

  .card .wrapp {
    padding: 5%;
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
    gap: 2.5vh;

    hr {
      border: 1px solid var(--p7);
    }
  }

  .card .wrapp ul li {
    display: flex;
    justify-content: space-between;

    span {
      font-family: var(--title);
      font-size: clamp(0.875rem, 1.5vw, 1.5vw);
      color: var(--p4);
    }
  }

  .card .wrapp .cookie {
    width: clamp(400px, 100%, 700px);
    padding-right: 5%;

    grid-area: 2/2;

    position: absolute;
    top: -40px;
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
      font-size: clamp(1.25rem, 4vw, 4rem);
      font-weight: var(--semibold);
      color: var(--p8);
    }

    & :nth-child(2) {
      font-size: clamp(1.25rem, 2vw, 2 rem);
      color: var(--p5);
    }
  }
`;
