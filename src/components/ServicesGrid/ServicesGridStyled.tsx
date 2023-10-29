import styled from "styled-components";

export const ServicesGridStyled = styled.section`
  background: var(--p1);
  padding: 250px 120px 300px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 210px;
  position: relative;

  &::after {
    content: "hmmmmm!";
    display: block;
    position: absolute;
    bottom: 40px;
    right: 40px;
    font-family: var(--text);
    color: var(--p2);
  }

  .title {
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
    transform: translateX(10px);

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

  .sub-title {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-family: var(--title);
      font-weight: var(--semibold);
      font-size: 4rem;
      letter-spacing: 0.05rem;
      text-transform: uppercase;
      color: var(--p8);

      &::before {
        content: "seu doce em boas mãos";
        display: block;
        font-family: inherit;
        font-size: 0.875rem;
        text-transform: uppercase;
        color: var(--p4);
      }
    }

    p {
      font-family: var(--text);
      font-size: 1.25rem;
      line-height: 2rem;
      text-align: center;
      color: var(--p7);
      max-width: 60ch;
      padding: 12px 0 32px 0;
    }
  }

  @media screen and (max-width: 1200px) {
    .sub-title h3 {
      font-size: 3rem;
    }

    .sub-title p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  @media screen and (max-width: 1000px) {
    padding-bottom: 200px;

    &::after {
      font-size: 0.5rem;
      bottom: 20px;
      right: 20px;
    }

    .title h2 {
      font-size: 2rem;
      padding: 48px 64px 56px 64px;

      &::before {
        font-size: 0.875rem;
      }
    }

    .sub-title h3 {
      font-size: 2rem;

      &::before {
        font-size: 0.5rem;
      }
    }

    .sub-title p {
      font-size: 0.875rem;
      line-height: 1.25rem;
      padding: 8px 0 28px 0;
      max-width: 45ch;
    }

    .sub-title button.rounded {
      font-size: 0.75rem;
    }
  }

  @media screen and (max-width: 700px) {
    padding-top: 210px;
    gap: 120px;

    .title svg {
      transform: scale(0.8);
    }

    .title h2 {
      font-size: 1.25rem;
      padding: 40px 40px 40px 40px;
      text-align: center;

      &::before {
        display: none;
      }
    }

    .cards > * {
      width: max-content;

      h3 {
        font-size: 3rem;
      }

      p {
        font-size: 0.875rem;
        line-height: 1.5rem;
        padding: 16px 32px 48px 32px;
        max-width: 30ch;
      }

      .circle {
        width: 120px;
        height: 120px;
        margin-top: -72px;

        svg {
          transform: scale(0.8);
        }
      }
    }

    .sub-title h3 {
      text-align: center;

      &::before {
        display: none;
      }
    }
  }
`;
