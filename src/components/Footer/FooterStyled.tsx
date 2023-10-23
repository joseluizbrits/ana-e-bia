import styled from "styled-components";
import map from "../../assets/map.jpg";

export const FooterStyled = styled.section`
  background: var(--p4);
  padding: 120px 0 40px 0;

  .card {
    background: var(--p8);
    border-radius: 50px;
    box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.2);
    margin: 0 40px;
  }

  .wrapp {
    display: flex;
    justify-content: space-between;
  }

  .brand {
    padding: 200px 120px 64px 80px;
    position: relative;
  }

  .brand .logo {
    display: flex;
    align-items: center;
    gap: 12px;

    font-family: var(--title);
    font-weight: var(--semibold);

    :nth-child(1) {
      font-size: 4rem;
      color: #fff;
    }

    :nth-child(2) {
      font-size: 1.75rem;
      color: var(--p4);
    }
  }

  .brand .description {
    font-family: var(--text);
    font-weight: var(--medium);
    font-size: 1.25rem;
    letter-spacing: 0.05rem;
    color: var(--p4);
    padding-top: 16px;
  }

  .brand .networks {
    display: flex;
    transform: translate(-16px, -16px);
    padding-top: 32px;

    & > * {
      cursor: pointer;
      padding: 16px;
      transition: 0.3s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .brand nav ul {
    display: flex;
    gap: 48px;
  }

  .brand nav ul li a {
    font-family: var(--text);
    font-weight: var(--medium);
    font-size: 1.25rem;
    color: #fff;

    &:hover {
      color: var(--p2);
    }
  }

  .brand nav ul hr {
    border: 1px solid var(--p7);
  }

  .brand .copyright {
    font-family: var(--title);
    font-size: 0.875rem;
    color: var(--p3);

    position: absolute;
    bottom: 40px;
    left: 80px;
  }

  .location {
    flex: 1;
    padding: 40px 40px 40px 0;
  }

  .location .map {
    background: url(${map});
    height: 600px;
    border-radius: 50px;

    iframe {
      width: 100%;
      height: 100%;
      border-radius: 50px;
      filter: hue-rotate(280deg);
    }
  }

  .location .address {
    font-family: var(--title);
    font-size: 0.875rem;
    text-align: end;
    padding-top: 20px;
    color: var(--p3);
  }

  @media screen and (max-width: 1400px) {
    .brand {
      padding-right: 80px;
    }
  }

  @media screen and (max-width: 1100px) {
    .wrapp {
      flex-direction: column;
      position: relative;
    }

    .brand {
      position: initial;
    }

    .brand .logo :nth-child(1) {
      font-size: 3rem;
    }

    .brand .logo :nth-child(2) {
      font-size: 1.25rem;
    }

    .brand .description {
      font-size: 1rem;
    }

    .brand .copyright {
      font-size: 0.75rem;
      text-align: center;
      padding-right: 40px;
      left: 40px;
    }

    .location {
      padding: 40px 40px 100px 40px;
    }

    .location .address {
      font-size: 0.75rem;
    }
  }

  @media screen and (max-width: 690px) {
    .card {
      margin: 0 20px;
    }

    .brand {
      padding: 160px 40px 64px 40px;
    }

    .brand .logo :nth-child(1) {
      font-size: 2rem;
    }

    .brand .logo :nth-child(2) {
      font-size: 0.875rem;
    }

    .brand .description {
      font-size: 0.75rem;
      line-height: 1.25rem;
      padding-top: 8px;
    }

    .brand .networks > * {
      padding: 12px;

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .brand nav ul {
      flex-direction: column;
      gap: 20px;
      padding-top: 28px;
    }

    .brand nav ul li a {
      font-size: 1rem;
    }

    .location {
      padding: 40px 20px 100px 20px;
    }

    .location .map {
      height: 400px;
    }
  }
`;