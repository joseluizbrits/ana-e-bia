import styled from "styled-components";

export const RegisterStyled = styled.section`
  margin: 0 6%;
  display: flex;
  flex-direction: row-reverse;
  gap: 80px;

  .content {
    h2 {
      letter-spacing: 0.05rem;
      display: flex;
      flex-direction: column;

      :nth-child(1) {
        font-family: var(--title);
        font-weight: var(--bold);
        font-size: clamp(2rem, 5vw, 6rem);
        color: var(--p5);
      }

      :nth-child(2) {
        font-family: var(--text);
        font-weight: var(--regular);
        font-size: clamp(1rem, 2vw, 2.25rem);
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
  }

  form button {
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

  img {
    width: clamp(200px, 60vw, 600px);
    height: clamp(200px, 90vw, 900px);
    border-radius: 50px;
    object-fit: cover;
    box-shadow: -40px 40px 0 0 var(--p5);
  }
`;
