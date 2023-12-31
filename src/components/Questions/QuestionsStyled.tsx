import styled from "styled-components";

export const QuestionsStyled = styled.section`
  background: var(--p4);
  padding-top: 20px;

  .card {
    background: var(--p2);
    border-radius: 50px;
    box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.2);
    margin: 0 40px;
    display: flex;
  }

  h2 {
    font-family: var(--title);
    font-weight: var(--regular);
    font-size: clamp(2.5rem, 5vw, 5rem);
    line-height: 1.25em;
    max-width: 11ch;
    padding: 80px 0 0 120px;
    color: var(--p8);
  }

  .accordion-list {
    width: 100%;
    padding: 72px 120px 88px 120px;
  }

  .question {
    display: grid;
    grid-template-columns: 1fr max-content;
    align-items: center;
    padding: 48px 0 32px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: rgba(255, 182, 199, 0.2);
    }
  }

  .question p {
    font-family: var(--text);
    font-size: clamp(1.5rem, 2vw, 2.5rem);
    line-height: 1.5em;
    color: var(--p8);
  }

  .question svg {
    opacity: 0.6;
    transition: 0.3s;

    &.active {
      opacity: 1;
      transform: rotate(135deg);
    }
  }

  hr {
    grid-column: span 2;
    border: 1px solid var(--p3);
  }

  .answer {
    overflow-y: hidden;
    height: 0;
    transition: 0.3s;

    &.active {
      height: 86px;
      max-width: 100%;
    }
  }

  .answer p {
    color: var(--p8);
    font-family: var(--text);
    font-size: 1rem;
    line-height: 1.5em;
    padding-top: 20px;
    max-width: 58ch;
  }

  @media screen and (max-width: 1550px) {
    h2 {
      max-width: 12ch;
    }

    .question {
      padding: 40px 0 28px;
    }

    .question svg {
      transform: scale(0.6);
    }

    .answer.active {
      height: 100px;
    }
  }

  @media screen and (max-width: 1280px) {
    .accordion-list {
      padding: 44px 80px 72px 80px;
    }

    h2 {
      padding: 56px 0 0 80px;
    }

    .question svg {
      transform: scale(0.6);

      &.active {
        transform: scale(0.8) rotate(135deg);
      }
    }

    .answer.active {
      height: 86px;
    }

    .answer p {
      padding-top: 20px;
    }
  }

  @media screen and (max-width: 970px) {
    .card {
      flex-direction: column;
    }

    h2 {
      max-width: max-content;
      padding-right: 80px;
    }

    .accordion-list {
      padding-top: 20px;
    }
  }

  @media screen and (max-width: 690px) {
    .card {
      margin: 0 20px;
    }

    .accordion-list {
      padding: 20px 40px 40px 40px;
    }

    h2 {
      padding: 40px 40px 0 40px;
      text-align: center;
    }
  }
`;
