import styled from "styled-components";

export const FormStyled = styled.section`
  width: 100%;
  background: var(--p8);
  border-radius: 0 300px 0 0;
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
    padding: 0 8%;
  }

  svg {
    margin-top: -200px;
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
      right: -40px;
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
    margin-top: 4px;
    position: relative;
  }

  form .fields input[type="text"],
  form .fields input[type="email"] {
    height: 32px;
  }

  form .fields textarea {
    height: 200px;
    position: relative;
  }
`;
