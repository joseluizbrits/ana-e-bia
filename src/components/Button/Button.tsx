import React from "react";
import { ButtonStyled } from "./ButtonStyled";

type ButtonProps = React.ComponentProps<"button"> & {
  color: "p5" | "p6" | "gradient" | "none";
  text: string;
};

function Button({ color, text, ...props }: ButtonProps) {
  return (
    <ButtonStyled color={color} {...props}>
      {text}
    </ButtonStyled>
  );
}

export default Button;
