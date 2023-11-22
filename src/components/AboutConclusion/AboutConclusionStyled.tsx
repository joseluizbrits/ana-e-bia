import styled from "styled-components";

export const AboutConclusionStyled = styled.div`
  background: var(--p5);
  padding: 16%;
  position: relative;

  .text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;

    > * {
      font-family: var(--title);
      font-size: clamp(1rem, 2vw, 2.5rem);
      line-height: 1.5em;
      letter-spacing: 0.05rem;
      color: var(--p3);

      strong {
        font-weight: var(--medium);
        color: #fff;
      }
    }

    :nth-child(1) {
      max-width: 39ch;
    }

    :nth-child(2) {
      align-self: flex-end;
      text-align: end;
      max-width: 25ch;
    }
  }

  svg {
    width: clamp(100px, 40vw, 700px);
    position: absolute;
    bottom: -300px;
    left: -15%;
    z-index: 1;
  }
`;
