import React from "react";
import { AboutConclusionStyled } from "./AboutConclusionStyled";
import Donut from "../../assets/svg/Donut";

function AboutConclusion() {
  return (
    <AboutConclusionStyled>
      <div className="text">
        <p>
          Em cada bolo, cookie, macaron e sobremesa que oferecemos você encontra
          a doçura das nossas memórias de infância e o sabor autêntico da{" "}
          <strong>confeitaria artesanal</strong>
        </p>
        <p>
          <strong>Ana & Bia Doces</strong> é mais do que uma simples
          confeitaria; é um pedaço da história da nossa família
        </p>
      </div>
      <Donut />
    </AboutConclusionStyled>
  );
}

export default AboutConclusion;
