import styled from "styled-components";

export const RegisterStyled = styled.section`
  margin: 0 6%;
  display: flex;
  flex-direction: row-reverse;
  gap: 80px;

  .content {
    min-width: 600px;

    h2 {
      letter-spacing: 0.05rem;
      display: flex;
      flex-direction: column;
      margin: 120px 0 64px 0;

      :nth-child(1) {
        font-family: var(--title);
        font-weight: var(--bold);
        font-size: clamp(2.25rem, 5vw, 6rem);
        color: var(--p5);
      }

      :nth-child(2) {
        font-family: var(--text);
        font-weight: var(--regular);
        font-size: clamp(1rem, 1.5vw, 2rem);
        color: var(--p6);
      }
    }
  }

  form {
    background: rgba(255, 210, 221, 0.4);
    border-radius: 50px;
  }

  form .wrapp {
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  form label {
    font-family: var(--text);
    font-size: clamp(1rem, 1.25vw, 1.5rem);
    color: var(--p6);
  }

  form input[type="text"],
  form input[type="email"] {
    width: 100%;
    height: 24px;
    font-size: 1rem;
    padding: 20px;
    margin-top: 12px;
    border-radius: 10px;
    background: #fff;

    font-family: var(--text);
    font-size: 1rem;
    color: var(--p6);

    transition: 0.1s;

    &:hover,
    &:focus {
      box-shadow: 0px 1px 1px 1px var(--p5);
    }

    &.error {
      outline: 1px solid var(--p5);
    }
  }

  form p.error {
    color: #ff3333;
    padding-top: 8px;
    font-family: var(--text);
    font-size: 0.75rem;
  }

  form button {
    margin-top: 16px;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    background: var(--p6);
    box-shadow: -1px 1px 10px 0px rgba(0, 0, 0, 0.1);
    font-family: var(--text);
    font-weight: var(--semibold);
    color: #fff;
    transition: 0.3s;

    &:hover {
      opacity: 0.8;
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

  form p.success {
    font-family: var(--text);
    font-size: clamp(0.75rem, 1vw, 1.25rem);
    line-height: 1.5em;
    letter-spacing: 0.05rem;
    padding-top: 16px;
    color: var(--p4);
  }

  .image {
    width: clamp(200px, 60vw, 600px);
    height: clamp(200px, 60vw, 900px);

    img {
      width: 100%;
      height: 113%;
      border-radius: 50px;
      object-fit: cover;
      margin-top: -160px;
    }
  }

  @media screen and (max-width: 1100px) {
    .image img {
      margin-top: 80px;
      margin-left: 10px;
      height: 82%;
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 24px;
    align-items: center;

    .content {
      min-width: initial;
      width: 100%;

      h2 {
        margin: 40px 0 64px 24px;
        align-items: center;

        :nth-child(2) {
          text-align: center;
          line-height: 1.25em;
          padding-top: 8px;
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    .image img {
      margin-top: 64px;
      margin-left: 5px;
    }
  }
`;
