import styled from "styled-components";

export const Header = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;

  position: absolute;
  top: 0;
  right: 0;

  .logo {
    transform: translateX(105px);
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

  @media (max-width: 1100px) {
    flex-direction: row-reverse;

    button.rounded {
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

export const Hamburger = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background: none;
  cursor: pointer;
  z-index: 101;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 4px;

  &::before {
    content: "";
    width: 40px;
    height: 3px;
    border-radius: 3px;
    background: var(--p6);
    transition: 0.3s;
  }

  &::after {
    content: "";
    width: 40px;
    height: 3px;
    border-radius: inherit;
    background: var(--p6);
    transition: 0.3s;
  }

  &.active::before {
    transform: rotate(-135deg) translateY(-5px);
    background: #fff;
  }

  &.active::after {
    transform: rotate(135deg) translateY(5px);
    background: #fff;
  }
`;
