import styled from "styled-components";

export const MagnifyingGlassStyled = styled.div`
  width: max-content;
  margin: 16% auto 0 auto;

  display: grid;
  grid-template-columns: max-content max-content;

  .title {
    height: fit-content;
    border-radius: 50px 0 0 0;
    background: var(--p6);

    margin-left: 48px;
    margin-right: -110px; // -------------->>> REVISAR
    align-self: end;

    h2 {
      font-family: var(--title);
      font-weight: var(--bold);
      font-size: clamp(1rem, 2vw, 2.5rem);
      line-height: 1.25em;
      letter-spacing: 0.05rem;
      text-transform: uppercase;
      max-width: 20ch;
      padding: 5% 0 5% 10%;
      color: var(--p5);
    }
  }

  .title-2 {
    grid-area: 1/-1;
    border-radius: 0 50px 0 0;
    margin-left: -110px;
    margin-right: 48px;

    display: flex;
    justify-content: end;

    h2 {
      text-align: end;
      padding: 5% 10% 5% 0;
    }
  }

  .card {
    height: fit-content;
    border-radius: 50px 0 0 50px;
    background: var(--p5);

    padding-right: 80px; // ------------------>>> REVISAR
    margin-right: -110px; // ------------------>>> REVISAR
    grid-area: 2;
  }

  .card-2 {
    grid-area: 2/-1;
    border-radius: 0 50px 50px 0;

    padding: 0;
    margin: 0;
    padding-left: 80px;
    margin-left: -110px;
  }

  .sub-card {
    padding: 40px;
  }

  .sub-card .description {
    width: max-content;
    padding: 32px;
    border-radius: 50px;
    background: rgba(219, 58, 95, 0.2);

    display: flex;
    flex-direction: column;
    gap: 40px;

    p {
      font-family: var(--text);
      font-size: clamp(0.75rem, 1.25vw, 1.5rem);
      line-height: 1.75em;
      max-width: 32ch;
      color: #fff;
    }

    .tags {
      display: flex;
      gap: 32px;

      span {
        font-family: var(--text);
        font-size: clamp(0.625rem, 0.75vw, 1rem);
        color: var(--p3);
      }
    }
  }

  .sub-card-2 .description-2 {
    p {
      text-align: end;
    }

    .tags-2 {
      justify-content: end;
    }
  }

  .image {
    background: var(--p5);
    width: clamp(100px, 40vw, 800px);
    height: clamp(100px, 40vw, 800px);

    border-radius: 50%;

    grid-row: span 2;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: clamp(100px, 31vw, 800px);
      height: clamp(100px, 31vw, 800px);
      object-fit: cover;
      border-radius: 50%;
    }
  }

  @media screen and (max-width: 1200px) {
    .title {
      border-radius: 50px 50px 0 0;
    }

    .title h2 {
      padding: 4% 0 4% 10%;
    }

    .title-2 h2 {
      padding: 4% 10% 4% 0;
    }

    .card {
      border-radius: 50px;
    }

    .sub-card {
      padding: 20px;
      position: relative;
      z-index: 1;
    }

    .image {
      align-self: center;
    }
  }

  @media screen and (max-width: 700px) {
    margin: 28% auto 0 auto;

    .title {
      margin: 0;
    }

    .card {
      margin: 0;
      padding: 0;
      border-radius: 0 0 50px 50px;
    }

    .card .sub-card .description .tags {
      gap: 20px;
    }

    .image {
      margin-left: -140px;
      margin-top: -260px;
      width: clamp(140px, 25vw, 800px);
      height: clamp(140px, 25vw, 800px);

      img {
        width: clamp(100px, 15vw, 800px);
        height: clamp(100px, 15vw, 800px);
      }
    }

    .image-2 {
      margin: 0;
      margin-right: -140px;
      margin-top: -260px;
    }
  }
`;
