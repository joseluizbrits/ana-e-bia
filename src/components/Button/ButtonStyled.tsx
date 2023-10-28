import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: var(--${(props) => props.color});
  padding: 16px 28px;
  border-radius: 50px;
  box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.3s;

  color: #fff;
  font-family: var(--text);
  font-weight: var(--medium);
  font-size: 1.25rem;
  letter-spacing: 0.05rem;

  &:hover {
    opacity: 0.8;
  }

  &.outline {
    border: 2px solid var(--p8);
    color: var(--p8);

    &:hover {
      background: var(--p8);
      color: #fff;
    }
  }
`;
