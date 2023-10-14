import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background: var(--${(props) => props.color});
  padding: 16px 28px;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }

  p {
    color: #fff;
    font-family: var(--text);
    font-weight: var(--semibold);
    font-size: 1.25rem;
    letter-spacing: 0.05rem;
  }
`;

type ButtonProps = React.ComponentProps<"button"> & {
  color: "p5" | "p6";
  text: string;
};

function Button({ color, text }: ButtonProps) {
  return (
    <ButtonStyled className="rounded" color={color}>
      <p>{text}</p>
    </ButtonStyled>
  );
}

export default Button;
