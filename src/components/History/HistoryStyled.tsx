import styled from "styled-components";

export const HistoryStyled = styled.section`
  background: var(--p5);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  position: relative;

  .title {
    padding: 200px 0 240px 0;
  }

  .title .logo {
    font-family: var(--title);
    font-weight: var(--semibold);
    color: var(--p6);

    display: flex;
    align-items: center;
    gap: 12px;

    & :nth-child(1) {
      font-size: 2rem;
    }

    & :nth-child(2) {
      font-size: 0.875rem;
    }
  }

  .title h2 {
    font-family: var(--title);
    letter-spacing: 0.05rem;
    padding-top: 8px;

    display: flex;
    flex-direction: column;
    gap: 12px;

    & :nth-child(1) {
      font-size: clamp(1rem, 4vw, 4rem);
      font-weight: var(--bold);
      color: var(--p1);
    }

    & :nth-child(2) {
      font-size: clamp(0.75rem, 2.5vw, 2.5rem);
      font-weight: var(--regular);
      color: var(--p3);
    }
  }

  .card {
    margin: 0 7% 200px 7%;
    border-radius: 50px;
    border: 1px solid var(--p4);
    position: relative;
  }

  .card .wrapp {
    background: var(--p5);
    border-radius: 50px;
    padding: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 8%;

    position: relative;
    z-index: 1;
  }

  .card .wrapp .image {
    max-width: 800px;

    img {
      width: 100%;
      border-radius: 50px;
      object-fit: cover;
      aspect-ratio: 1 / 1;
      opacity: 0.6;
    }
  }

  .card-sisters .wrapp .image img {
    object-position: 0 -40px;
  }

  .card .wrapp p {
    font-family: var(--title);
    font-size: clamp(1.25rem, 2vw, 2.5rem);
    line-height: 1.5em;
    letter-spacing: 0.05rem;
    color: var(--p1);
  }

  .card-grandmother .wrapp {
    .image {
      justify-self: end;
    }

    p {
      grid-row: 1;
      text-align: end;
    }
  }

  /* ---------- CIRCLES ---------- */
  &::before,
  .card::before {
    content: "";
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: var(--p4);
    opacity: 0.5;
    position: absolute;
  }

  &::before {
    top: -200px;
    left: -200px;
  }

  .card-sisters::before {
    top: -140px;
    right: -180px;
  }

  .card-grandmother::before {
    bottom: -140px;
    left: -180px;
  }

  @media screen and (max-width: 1000px) {
    .title {
      padding: 160px 0 160px 0;
    }

    .card {
      margin: 0 5% 160px 5%;
    }

    .circle-title {
      display: none;
    }

    .circle-sisters,
    .circle-grandmother {
      top: -20%;
    }
  }

  @media screen and (max-width: 800px) {
    .card .wrapp {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .card .wrapp .image img {
      aspect-ratio: 4/3;
    }

    .card-grandmother .wrapp .image img {
      object-position: 0 -100px;
    }

    .card-grandmother .wrapp p {
      grid-row: initial;
      text-align: start;
    }
  }

  @media screen and (max-width: 600px) {
    .title {
      padding-top: 120px;
    }

    .card .wrapp {
      padding: 11%;
    }
  }
`;
