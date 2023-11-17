import styled from "styled-components";

export const TranslucentCardStyled = styled.div`
  margin: 9% auto;
  padding: 80px;

  display: flex;
  justify-content: center;
  gap: 64px;

  .card {
    max-width: 800px;
    padding: 4% 4%;
    border-radius: 50px;
    background: var(--p5);
    /* box-shadow: -24px 24px 0 0 var(--p4); */
    margin-left: 24px;
  }

  .card h2 {
    font-family: var(--title);
    font-weight: var(--medium);
    font-size: clamp(1rem, 2.25vw, 3rem);
    letter-spacing: 0.05rem;
    color: #fff;
    padding: 0 0 6% 6%;
  }

  .card .description {
    padding: 40px;
    border-radius: 50px;
    background: rgba(219, 58, 95, 0.2);

    display: flex;
    flex-direction: column;
    gap: 40px;

    p {
      font-family: var(--title);
      font-weight: var(--medium);
      font-size: clamp(0.75rem, 1.25vw, 1.5rem);
      line-height: 1.5em;
      color: var(--p2);
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

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 120px;

    .card {
      max-width: 500px;
    }
  }

  @media screen and (max-width: 700px) {
    .card {
      padding: 20px;
    }

    .card h2 {
      text-align: center;
      padding: 0;
      padding-bottom: 20px;
    }
  }

  @media screen and (max-width: 530px) {
    .card {
      box-shadow: -12px 12px 0 0 var(--p4);
      margin-left: 12px;
    }

    .card .description {
      padding: 32px;
      gap: 32px;
    }
  }
`;
