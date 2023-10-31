import styled from "styled-components";

export const TeachingStyled = styled.section`
  background: var(--p1);
  overflow-x: hidden;

  h2 {
    font-family: var(--title);
    font-weight: var(--bold);
    font-size: clamp(2rem, 3.5vw, 4rem);
    line-height: 1.5em;
    letter-spacing: 0.05rem;
    text-align: center;
    color: var(--p4);
    max-width: 30ch;
    margin: 0 auto;
    padding: 16% 0;
    position: relative;

    &::before,
    &::after {
      content: "";
      width: clamp(100px, 40vw, 400px);
      height: clamp(100px, 40vw, 400px);
      border-radius: 50%;
      background: var(--p4);
      opacity: 0.3;
      position: absolute;
    }

    &::before {
      top: -23%;
      left: -46%;
    }

    &::after {
      bottom: -28%;
      right: -50%;
    }
  }

  .card {
    margin: 0 6%;
    background: var(--p1);
    border-radius: 50px;
    border: 1px solid var(--p2);

    position: relative;
    z-index: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .logo-container {
    margin: 40px 40px 40px 0;
    background: #ffdfe6;
    border-radius: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 12px;

    :nth-child(1) {
      color: var(--p7);
      font-family: var(--title);
      font-weight: var(--semibold);
      font-size: clamp(1rem, 4vw, 5rem);
    }

    :nth-child(2) {
      color: var(--p5);
      font-family: var(--title);
      font-weight: var(--semibold);
      font-size: clamp(0.5rem, 1.25vw, 1.5rem);
    }
  }

  .sub-card-container {
    margin: 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .sub-card .title {
    padding: 5% 6%;
    border-radius: 50px 50px 0 0;
    background: rgba(255, 210, 221, 0.4);

    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-family: var(--text);
      font-weight: var(--medium);
      font-size: clamp(0.875rem, 1.5vw, 1.5rem);
      line-height: 1.5em;
      letter-spacing: 0.05rem;
      padding-right: 16px;
      color: var(--p8);
    }

    svg {
      width: clamp(20px, 3vw, 40px);
      height: clamp(20px, 3vw, 40px);
    }
  }

  .sub-card p {
    font-family: var(--text);
    font-size: clamp(0.75rem, 1vw, 1.25rem);
    line-height: 1.5em;
    letter-spacing: 0.05rem;
    border-radius: 0 0 50px 50px;
    padding: 4% 6% 6% 6%;
    background: var(--p2);
    color: var(--p7);
  }

  @media screen and (max-width: 1200px) {
    h2::before,
    h2::after {
      width: clamp(100px, 30vw, 400px);
      height: clamp(100px, 30vw, 400px);
    }

    .logo {
      gap: 12px;

      :nth-child(1) {
        font-size: clamp(2rem, 3vw, 5rem);
      }

      :nth-child(2) {
        font-size: clamp(0.875rem, 1vw, 1.5rem);
      }
    }

    .card .title {
      padding: 3% 8%;
    }

    .sub-card p {
      padding: 4% 9% 7% 9%;
    }
  }

  @media screen and (max-width: 1000px) {
    h2::before {
      left: -40%;
    }

    h2::after {
      right: -32%;
    }

    .card {
      grid-template-columns: 1fr;
    }

    .logo-container {
      margin: 6% 6% 0 6%;
      padding: 6%;
    }

    .sub-card-container {
      margin: 6%;
    }

    .sub-card .title {
      padding: 28px 40px 20px 40px;
    }

    .sub-card p {
      padding: 20px 40px 28px 40px;
    }
  }

  @media screen and (max-width: 600px) {
    h2 {
      padding: 120px 0;
      margin: 0 6%;
    }

    h2::before {
      top: -16%;
      left: -20%;
    }

    h2::after {
      bottom: -18%;
      right: -14%;
    }

    .logo-container {
      display: none;
    }

    .sub-card .title {
      padding: 28px 40px 20px 40px;
    }

    .sub-card p {
      padding: 20px 40px 28px 40px;
    }
  }
`;
