import styled from "styled-components";
import img from "../../assets/img-school.jpg";

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
        font-size: 4rem;
        color: var(--p8);
      }

      & :last-child {
        font-size: 1.25rem;
        color: var(--p2);
      }
    }

    p {
      font-family: var(--title);
      font-weight: var(--bold);
      font-size: 3rem;
      line-height: 1.5em;
      letter-spacing: 0.05rem;
      color: var(--p1);
      max-width: 26ch;
      padding: 20px 0 40px 0;
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
      padding: 200px 80px;

      h2 :first-child {
        font-size: 1.75rem;
      }

      h2 :last-child {
        font-size: 0.5rem;
      }

      p {
        font-size: 1rem;
      }
    }

    button.rounded.outline {
      font-size: 0.75rem;
    }
  }
`;
