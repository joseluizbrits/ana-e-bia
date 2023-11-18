import styled from "styled-components";

export const FormStyled = styled.section`
  width: 100%;
  margin-top: 18%;
  border-radius: 0 200px 0 0;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  background: var(--p8);
  display: flex;
  justify-content: center;
  position: relative;

  &::before {
    content: "hmmmmm!";
    display: block;
    position: absolute;
    top: -56px;
    left: 40px;
    font-family: var(--text);
    color: var(--p1);
  }

  .wrapp {
    max-width: 1920px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8% 64px 8%;
  }

  svg {
    margin-top: -200px;
    width: 560px;
  }

  form {
    padding-left: 8%;
  }

  form .title {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      bottom: 12px;
      right: 80px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: var(--p7);
      opacity: 30%;
      scale: var(--circleScale);
      animation: randomMoveTwo 4s ease-in-out infinite;
    }
  }

  form .title h2 {
    font-family: var(--title);
    font-weight: var(--medium);
    font-size: 2.25rem;
    line-height: 3.125rem;
    color: #fff;
    max-width: 25ch;
    padding-top: 64px;
    position: relative;
  }

  form .fields {
    padding-top: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    position: relative;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: var(--p6);
      opacity: 30%;
      scale: var(--circleScale);
    }

    &::before {
      top: 26%;
      left: 26%;
      animation: randomMoveOne 4s ease-in-out infinite;
    }

    &::after {
      bottom: 12px;
      right: -24px;
      animation: randomMoveTwo 4s ease-in-out infinite;
    }
  }

  form .fields .field-message,
  form .fields button {
    grid-column: span 2;
  }

  form .fields label {
    font-family: var(--text);
    color: var(--p3);
  }

  form .fields input[type="text"],
  form .fields input[type="email"],
  form .fields textarea {
    width: 100%;
    background: var(--p2);
    border-radius: 10px;
    margin-top: 8px;
    padding: 20px;
    position: relative;

    font-family: var(--text);
    color: var(--p8);

    transition: 0.3s;

    &:hover {
      background: #fff;
      box-shadow: -2px 2px 1px 1px var(--p5);
    }

    &:focus-visible {
      background: #fff;
      outline: 1px solid var(--p6);
      box-shadow: -2px 2px 1px 1px var(--p5);
    }

    &.error {
      outline: 1px solid #ef2c1e;
    }
  }

  form .fields input[type="text"],
  form .fields input[type="email"] {
    height: 24px;
  }

  form .fields textarea {
    height: 200px;
    position: relative;
    z-index: 1;
  }

  form .fields button {
    height: 40px;
    border-radius: 10px;
    background: var(--p6);
    box-shadow: -1px 1px 10px 0px rgba(0, 0, 0, 0.1);

    font-family: var(--text);
    font-weight: var(--semibold);
    color: #fff;

    position: relative;
    z-index: 1;

    transition: background 0.3s;

    &:hover {
      background: var(--p5);
    }

    &.loading {
      pointer-events: none;
      color: transparent;
      opacity: 0.8;
      text-indent: -9999px;
      display: flex;
      justify-content: center;
      align-items: center;

      &::after {
        content: "";
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-bottom-color: transparent;
        animation: loading 1s linear infinite;
      }

      @keyframes loading {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }

  p.error,
  p.success {
    font-family: var(--text);
    font-weight: 400;
    font-size: 0.75rem;
  }

  p.error {
    margin-top: 4px;
    color: #ed4337;
  }

  p.success {
    color: #6bbf59;
  }

  /* -------------------- THEME LIGHT -------------------- */
  &.light {
    background: var(--p4);

    .wrapp {
      padding-bottom: 0;
    }

    form .title h2 {
      text-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);
    }

    form .title::before,
    form .fields::before,
    form .fields::after {
      background: var(--p5);
    }

    form .fields label {
      color: var(--p6);
    }

    form .fields input[type="text"],
    form .fields input[type="email"],
    form .fields textarea {
      color: var(--p8);
      background: #fff;

      &:hover,
      &:focus-visible {
        box-shadow: -2px 2px 1px 1px var(--p5);
      }

      &.error {
        outline: 1px solid #ef2c1e;
      }
    }

    p.error {
      color: #ef2c1e;
    }

    p.success {
      color: #00a246;
    }
  }

  /* -------------------- RESPONSIVE -------------------- */
  @media screen and (max-width: 1200px) {
    & {
      border-radius: 0 100px 0 0;
    }

    svg {
      width: 400px;
      height: fit-content;
      margin: 0;
    }
  }

  @media screen and (max-width: 1000px) {
    &::before {
      font-size: 0.5rem;
      top: -36px;
      left: 20px;
    }

    svg {
      width: 300px;
    }

    form .title h2 {
      font-size: 1.75rem;
      line-height: 2.25rem;
    }
  }

  @media screen and (max-width: 700px) {
    margin-top: 32%;

    svg {
      display: none;
    }

    form {
      padding: 0;
    }

    form .field-name,
    form .field-email {
      grid-column: span 2;
    }
  }
`;
