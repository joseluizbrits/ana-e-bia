import React from "react";
import { SchoolStyled } from "./SchoolStyled";
import Button from "../Button/Button";

function School() {
  return (
    <SchoolStyled>
      <div className="description">
        <h2>
          <span>Ana & Bia</span>
          <span>escola de doces</span>
        </h2>
        <p>
          Oficinas e aulas para aqueles que desejam aprender a arte da
          confeitaria
        </p>
        <Button className="rounded outline" color="none" text="Inscreva-se" />
      </div>
    </SchoolStyled>
  );
}

export default School;
