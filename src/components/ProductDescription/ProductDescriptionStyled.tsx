import styled from "styled-components";

export const ProductDescriptionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    width: 100%;
    text-align: center;
    background: var(--p4);
    border-radius: 0 0 0 200px;
    margin-bottom: 10%;
    overflow: hidden;

    h2 {
      font-family: var(--title);
      font-size: clamp(3rem, 13vw, 16vw);
      color: var(--p3);
      padding: 120px 0;
    }
  }

  .card {
    width: clamp(350px, 92vw, 2000px);
    margin: 0 80px 10% 80px;
    background: var(--p7);
    border-radius: 50px;
    box-shadow: 1px 0 4px 0px rgba(0, 0, 0, 0.4);
  }

  .card .wrapp {
    padding: 2% 5%;
  }

  .card .wrapp > div + div {
    border-top: 1px solid var(--p8);
  }

  .card .item {
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
  }

  .card .item h3 {
    font-family: var(--text);
    font-weight: var(--medium);
    font-size: clamp(1.25rem, 2vw, 2.5rem);
    color: var(--p1);
  }

  .card .item span {
    font-family: var(--text);
    font-size: clamp(0.875rem, 1vw, 1.5rem);
    line-height: 1.5em;
    color: var(--p4);
    transition: 0.1s;
  }

  .card .item .sub-item {
    background: var(--p6);
    border-radius: 50px;
    box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.2);
    padding: 40px;

    display: none; // .card .item:hover --> display: flex: ;
    align-items: center;
    gap: 64px;

    position: absolute;
    z-index: 1;
  }

  .card .item:hover {
    span {
      color: #fff;
      scale: 1.1;
    }

    .sub-item {
      display: flex;
    }
  }

  .sub-item img {
    width: clamp(200px, 20vw, 400px);
    height: clamp(200px, 20vw, 400px);
    border-radius: 50px;
    object-fit: cover;
  }

  .sub-item .text-wrapp {
    margin-right: 20px;
    min-width: max-content;
    display: flex;
    flex-direction: column;
    gap: 24px;

    h4 {
      font-family: var(--title);
      font-weight: var(--bold);
      font-size: clamp(1.5rem, 2vw, 2.5rem);
      color: #fff;
    }

    p {
      font-family: var(--text);
      font-size: clamp(0.875rem, 1vw, 1.5rem);
      line-height: 1.5em;
      color: var(--p2);
      max-width: 32ch;
    }

    a {
      font-family: var(--text);
      font-weight: var(--semibold);
      font-size: clamp(0.875rem, 1vw, 1.25rem);
      line-height: 1.5em;
      color: var(--p2);

      background: none;
      border: 2px solid var(--p2);
      border-radius: 50px;

      padding: 12px 32px;
      width: max-content;
      align-self: end;

      animation: up ease-in 0.2s;

      transition: 0.3s;

      &:hover {
        background-color: var(--p5);
        color: #fff;
      }
    }
  }

  @keyframes up {
    from {
      scale: 0;
    }
    to {
      scale: 1;
    }
  }

  @media screen and (max-width: 1300px) {
    .title {
      border-radius: 0 0 0 100px;

      h2 {
        padding: 80px 0;
      }
    }

    .card .wrapp {
      padding: 2% 8% 5% 8%;
    }

    .card .item {
      flex-direction: column;
      align-items: initial;
      gap: 12px;
      padding: 40px 0 20px 0;

      h3 {
        font-family: var(--title);
        font-weight: var(--bold);
        color: var(--p1);
      }
    }

    .card .sub-item {
      translate: 0 -200px;
    }
  }

  @media screen and (max-width: 800px) {
    .card .item span {
      font-size: 0.75rem;
    }

    .card .item .sub-item {
      flex-direction: column;
      gap: 40px;

      img {
        width: 300px;
      }

      .text-wrapp {
        margin-left: 0;
      }

      .text-wrapp button {
        margin-top: 12px;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .card .wrapp {
      padding: 2% 11% 5% 11%;
    }

    .card .item .sub-item {
      translate: -40px -200px;
      padding: 20px;
    }
  }
`;
