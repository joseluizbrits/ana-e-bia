import styled from "styled-components";

export const MenuStyled = styled.nav`
  display: none;

  &.active {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: var(--p5);
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: center;

    .link {
      text-align: center;
      position: relative;
      z-index: 10;

      a {
        font-family: var(--title);
        font-weight: var(--medium);
        font-size: clamp(5rem, 7vw, 8rem);
        letter-spacing: 0.05rem;
        text-transform: capitalize;
        color: #fff;
        transition: 0.1s;
      }

      &:hover {
        a {
          font-weight: var(--regular);
          color: var(--p6);
        }
      }
    }

    aside {
      width: 40%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;

      display: grid;

      opacity: 0;
      transition: 0.3s;

      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #ff6488 5%, transparent);

        grid-area: 1/1;
        position: relative;
        z-index: 1;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        grid-area: 1/1;
      }
    }

    .route-1:hover,
    .route-2:hover,
    .route-3:hover,
    .route-4:hover {
      aside {
        opacity: 1;
      }
    }
  }

  .sweets-routes {
    position: absolute;
    bottom: 8%;
    right: 5%;

    display: flex;
    z-index: 10;

    a {
      font-family: var(--text);
      font-weight: var(--bold);
      font-size: clamp(0.875rem, 1.25vw, 1.5rem);
      letter-spacing: 0.05rem;
      text-transform: uppercase;
      color: var(--p6);
      padding: 24px;
      transition: 0.3s;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .sweets-routes a {
      padding: 12px;
    }
  }
`;
