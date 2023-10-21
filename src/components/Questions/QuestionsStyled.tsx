import styled from "styled-components";

export const QuestionStyled = styled.section`
  background: var(--p4);
  padding: 20px;

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
    font-size: 5rem;
    line-height: 1.25em;
    max-width: 11ch;
    padding: 80px 0 0 120px;
    color: var(--p8);
  }

  .accordion-list {
    width: 100%;
    padding: 72px 120px 88px 120px;

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

      p {
        font-family: var(--text);
        font-size: 2rem;
        color: var(--p8);
      }
    }

    hr {
      grid-column: span 2;
      border: 1px solid var(--p3);
    }
  }
`;
