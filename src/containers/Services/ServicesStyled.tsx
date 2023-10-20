import styled from "styled-components";

export const ServicesStyled = styled.section`
  background: var(--p1);
  padding: 240px 120px 0 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 160px;

  .title {
    /* width: 600px;
    height: 160px; */
    background: var(--p7);
    border-radius: 200px;
    outline: 2px solid var(--p4);
    box-shadow: 0 0 0 20px var(--p7);
    position: relative;
  }

  .title svg {
    position: absolute;
    top: -64px;
    left: calc(50% - 50px);
  }

  .title h2 {
    /* height: 64px; */
    font-family: var(--title);
    font-weight: var(--medium);
    font-size: 4rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: var(--p4);

    padding: 56px 80px 64px 80px;

    display: flex;
    flex-direction: column;
    align-items: center;

    &::before {
      content: "conheça os";
      display: block;
      font-size: 1.5rem;
      letter-spacing: 0.05rem;
      text-transform: uppercase;
      color: var(--p5);
      cursor: text;
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 64px;
  }

  .cards > * {
    width: 500px;
    border-radius: 50px;
    margin-top: 88px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-family: var(--title);
      font-weight: var(--bold);
      font-size: 4rem;
      letter-spacing: 0.05rem;
      text-transform: lowercase;
      text-align: center;
      padding-top: 16px;
    }

    p {
      font-family: var(--text);
      font-size: 1.25rem;
      line-height: 2rem;
      text-align: center;
      padding: 24px 48px 64px 48px;
    }

    .circle {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-top: -88px;
      background: inherit;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .cards .events {
    background: var(--p6);
    box-shadow: -20px 20px 0 0 var(--p8);

    .circle {
      box-shadow: -12px 12px 0 0 var(--p8);
    }

    h3,
    p {
      color: var(--p1);
    }
  }

  .cards .menus {
    background: var(--p4);
    box-shadow: -20px 20px 0 0 var(--p6);

    .circle {
      box-shadow: -12px 12px 0 0 var(--p6);
    }

    h3,
    p {
      color: var(--p8);
    }
  }

  .cards .deliveries {
    background: var(--p2);
    box-shadow: -20px 20px 0 0 var(--p7);

    .circle {
      box-shadow: -12px 12px 0 0 var(--p7);
    }

    h3,
    p {
      color: var(--p7);
    }
  }
`;
