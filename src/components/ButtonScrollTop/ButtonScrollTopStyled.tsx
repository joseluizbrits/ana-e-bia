import styled from "styled-components";

export const ButtonScrollTopStyled = styled.button`
  position: fixed;
  bottom: 80px;
  right: 64px;

  background: none;
  mix-blend-mode: hard-light;
  rotate: 180deg;
  z-index: 10;

  opacity: 0;
  scale: 0;
  pointer-events: none;
  transition: 0.3s;

  &.active {
    opacity: 0.4;
    scale: 4;
    pointer-events: all;
  }

  &:hover {
    opacity: 0.8;
    transform: translateY(20%);
  }

  @media screen and (max-width: 700px) {
    bottom: 64px;
    right: 40px;

    &.active {
      scale: 3;
    }

    &:hover {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
