import styled from "styled-components";

export const HandsOnLearningStyled = styled.section`
  background: var(--p4);

  .title {
    display: flex;
    justify-content: center;

    h2 {
      width: max-content;
      padding: 12% 0 16% 0;
      display: flex;
      flex-direction: column;

      :nth-child(1) {
        font-family: var(--text);
        font-weight: var(--regular);
        font-size: clamp(0.875rem, 1.5vw, 2rem);
        color: var(--p2);
      }
      :nth-child(2) {
        font-family: var(--title);
        font-weight: var(--bold);
        font-size: clamp(2rem, 6vw, 8rem);
        color: var(--p6);
      }
    }
  }

  .paragraph {
    height: clamp(100px, 20vw, 300px);
    padding: 0 11%;

    display: flex;
    position: relative;

    img {
      width: clamp(200px, 30vw, 500px);
      height: clamp(200px, 30vw, 500px);
      border-radius: 50%;
      object-fit: cover;

      position: absolute;
      z-index: 1;
    }

    p {
      font-family: var(--text);
      font-size: clamp(1.5rem, 2vw, 2.5rem);
      line-height: 1.5em;
      color: #fff;
    }
  }

  .paragraph.p-1 {
    background: rgba(219, 58, 95, 0.1);
    justify-content: end;
    align-items: center;

    img {
      top: -30%;
      left: 10%;
    }

    p {
      text-align: end;
      max-width: 30ch;
    }
  }

  .paragraph.p-2 {
    height: clamp(100px, 40vw, 500px);
    background: rgba(219, 58, 95, 0.2);
    justify-content: center;
    align-items: center;

    p {
      max-width: 50ch;
      color: var(--p3);
    }
  }

  .paragraph.p-3 {
    background: rgba(219, 58, 95, 0.1);
    justify-content: start;
    align-items: center;

    img {
      top: -20%;
      right: 7%;
    }

    p {
      max-width: 34ch;
    }
  }
`;
