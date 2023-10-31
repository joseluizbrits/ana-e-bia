import styled from "styled-components";

type Props = {
  $circleColor?: string;
};

export const HeroStyled = styled.section<Props>`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;

  position: relative;
  z-index: 1;

  h1 {
    font-family: var(--title);
    font-weight: var(--bold);
    color: #fff;

    width: 100%;
    padding: 0 160px;
    margin-top: -120px;

    display: flex;
    justify-content: space-between;

    .text-1,
    .text-2 {
      display: grid;
      position: relative;

      p {
        grid-area: 1/1;
        transform: translate(0); // gambiarra (alternativa ao z-index)
      }

      &::before {
        // CIRCLES
        content: "";
        background: ${({ $circleColor }) => $circleColor};
        border-radius: 50%;
        grid-area: 1/1;
        position: absolute;
      }
    }

    .text-1 p {
      font-size: 4.5rem;
      max-width: 14ch;
    }

    .text-1::before {
      // CIRCLE ONE
      width: 160px;
      height: 160px;
      top: 10%;
      left: 10%;
    }

    .text-2 {
      align-self: flex-end;
    }

    .text-2 p {
      font-size: 3rem;
      max-width: 18ch;
    }

    .text-2::before {
      // CIRCLE TWO
      width: 100px;
      height: 100px;
      top: 10%;
      right: 10%;
    }
  }

  /* -------------------- pages SERVICES and SCHOOL -------------------- */
  .title-services,
  .title-school {
    display: flex;
    align-items: center;
    gap: 20px;

    position: absolute;
    bottom: 40px;
    left: 120px;

    span {
      font-family: var(--text);
      font-weight: var(--bold);
      font-size: clamp(0.75rem, 1vw, 1.5rem);
      text-transform: uppercase;
      color: var(--p1);
    }

    svg {
      width: clamp(12px, 1vw, 20px);
    }
  }

  .nav-services {
    position: absolute;
    bottom: 40px;
    right: 120px;

    ul {
      display: flex;
      gap: 20px;
    }

    li {
      font-family: var(--text);
      font-weight: var(--bold);
      font-size: clamp(0.75rem, 1vw, 1.5rem);
      text-transform: uppercase;
      color: var(--p1);
    }
  }

  /* -------------------- pages SCHOOL variation -------------------- */
  .title-school span {
    color: var(--p4);
  }

  .title-school svg g path {
    fill: var(--p4);
  }

  /* -------------------- RESPONSIVE -------------------- */
  @media screen and (max-width: 1500px) {
    h1 .text-1 p {
      font-size: 3.5rem;
    }

    h1 .text-2 p {
      font-size: 2rem;
    }

    h1 .text-2 .circle {
      transform: translate(160px, 0);
    }
  }

  @media screen and (max-width: 1200px) {
    h1 {
      margin-top: -240px;
    }

    h1 .text-2 {
      display: none;
    }
  }

  @media screen and (max-width: 720px) {
    h1 {
      padding: 0 40px;
    }

    h1 .text-1 p {
      font-size: 2.5rem;
    }

    h1 .text-1 .circle {
      transform: translate(64px, -32px);
    }
  }
`;
