import styled from "styled-components";
import img from "../../assets/img/img-school.jpg";

export const SchoolStyled = styled.section`
  background: var(--p4);
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -160px;
    right: -160px;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background: url(${img}) center center;
    background-size: cover;
    box-shadow: 0 0 0 100px var(--p5);
    opacity: 0.5;
    transform: var(--circlePosition);
  }

  .description {
    padding: 300px 0 300px 200px;
    position: relative;

    h2 {
      font-family: var(--title);
      display: flex;
      align-items: center;
      gap: 16px;

      & :first-child {
        font-size: clamp(1.5rem, 3vw, 4rem);
        color: var(--p8);
      }

      & :last-child {
        font-size: clamp(0.75rem, 1.25vw, 1.5rem);
        color: var(--p2);
      }
    }

    p {
      font-family: var(--title);
      font-weight: var(--bold);
      font-size: clamp(1.5rem, 3vw, 3rem);
      line-height: 1.5em;
      letter-spacing: 0.05rem;
      color: var(--p1);
      max-width: 26ch;
      padding: 20px 0 40px 0;
    }

    a {
      padding: 16px 28px;
      background: transparent;
      border-radius: 50px;
      border: 2px solid var(--p8);
      box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      transition: 0.3s;

      color: var(--p8);
      font-family: var(--text);
      font-weight: var(--medium);
      font-size: clamp(1rem, 1.25vw, 1.5rem);
      letter-spacing: 0.05rem;

      &:hover {
        background: var(--p8);
        color: #fff;
      }
    }
  }

  @media screen and (max-width: 1500px) {
    &::before {
      opacity: 0.2;
    }

    .description {
      padding: 300px 80px;
    }
  }

  @media screen and (max-width: 700px) {
    &::before {
      width: 450px;
      height: 450px;
    }

    .description {
      padding: 200px 40px;
    }
  }
`;
