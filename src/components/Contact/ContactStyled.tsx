import styled from "styled-components";

export const FormStyled = styled.section`
  width: 100%;
  background: var(--p8);
  border-radius: 0 200px 0 0;
  margin-top: 160px;
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

    .circle {
      position: absolute;
      bottom: 12px;
      right: 80px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: var(--p7);
      opacity: 30%;
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
  }

  form .fields .circle {
    position: absolute;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: var(--p6);
    opacity: 30%;

    &.c-one {
      top: 26%;
      left: 26%;
    }

    &.c-two {
      bottom: 12px;
      right: -24px;
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
    }

    &:focus-visible {
      background: #fff;
      outline: 1px solid var(--p7);
      box-shadow: 0px 0px 4px 1px var(--p4);
    }
  }

  form .fields input[type="text"],
  form .fields input[type="email"] {
    height: 24px;
  }

  form .fields textarea {
    height: 200px;
  }

  form .fields button {
    height: 40px;
    border-radius: 10px;
    position: relative;
    background: var(--p6);
    box-shadow: -1px 1px 10px 0px rgba(0, 0, 0, 0.1);

    font-family: var(--text);
    font-weight: var(--semibold);
    color: #fff;

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
