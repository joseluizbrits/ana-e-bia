import styled from "styled-components";

export const ProductDescriptionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .card {
    width: clamp(1000px, 92vw, 2000px);
    margin: 0 80px;
    border-radius: 50px;
    background: var(--p7);
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
    font-size: clamp(1.5rem, 2vw, 2.5rem);
    color: var(--p1);
  }

  .card .item span {
    font-family: var(--text);
    font-size: clamp(0.75rem, 1vw, 1.5rem);
    color: var(--p4);
    transition: 0.1s;
  }

  .card .item .sub-item {
    background: var(--p6);
    border-radius: 50px;
    padding: 40px;

    display: none; // .card .item:hover --> display: flex: ;
    align-items: center;
    gap: 64px;

    position: absolute;
    z-index: 1;
  }

  .card .item:hover {
    span {
      opacity: 0.6;
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

    button {
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
`;
