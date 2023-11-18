import styled from "styled-components";

export const Header = styled.header`
  height: 80px;
  width: 100%;
  padding: 0 120px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;

  animation: fall 1s ease-in forwards;

  @keyframes fall {
    from {
      transform: translateY(-100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .logo {
    transform: translateX(85px);
    display: flex;
    align-items: center;
    gap: 12px;

    :nth-child(1) {
      color: var(--p8);
      font-family: var(--title);
      font-weight: var(--semibold);
      font-size: 3rem;
    }

    :nth-child(2) {
      color: var(--p5);
      font-family: var(--title);
      font-weight: var(--semibold);
      font-size: 1.25rem;
    }
  }

  .logo-school {
    transform: translateX(40px);
  }

  a.rounded {
    z-index: 10;
  }

  @media (max-width: 1100px) {
    flex-direction: row-reverse;
    padding: 0 64px;

    a.rounded {
      display: none;
    }

    a.logo {
      transform: translateX(0);
    }
  }

  @media (max-width: 700px) {
    padding: 0 40px;

    a.logo :nth-child(1) {
      font-size: 1.75rem;
    }

    a.logo :nth-child(2) {
      font-size: 0.75rem;
    }
  }
`;

export const Hamburger = styled.a`
  width: 80px;
  height: 64px;
  translate: 20px;
  border-radius: 5px;
  background: none;

  cursor: pointer;
  z-index: 101;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  &::before {
    content: "";
    width: 40px;
    height: 2px;
    border-radius: 3px;
    background: var(--p6);
    transition: 0.3s;
  }

  &::after {
    content: "";
    width: 40px;
    height: 2px;
    border-radius: inherit;
    background: var(--p6);
    transition: 0.3s;
  }

  &.active::before {
    transform: rotate(-135deg) translateY(-5px);
    background: var(--p8);
  }

  &.active::after {
    transform: rotate(135deg) translateY(5px);
    background: var(--p8);
  }
`;
