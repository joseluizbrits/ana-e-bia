import React from "react";
import { MagnifyingGlassStyled } from "./MagnifyingGlassStyled";
import img from "../../assets/services-events.jpg";

function MagnifyingGlass() {
  return (
    <MagnifyingGlassStyled>
      <div className="title">
        <h2>Eventos personalizados</h2>
      </div>

      <div className="card">
        <div className="sub-card">
          <div className="description">
            <p>
              Mesas de sobremesas temáticas com uma variedade de doces, bolos e
              outras delícias que se encaixam perfeitamente no tema do evento
            </p>

            <div className="tags">
              <span>casamentos</span>
              <span>aniversários</span>
              <span>eventos corporativos</span>
            </div>
          </div>
        </div>
      </div>

      <div className="image">
        <img src={img} alt="Mesa decorada com muitas flores e de doces" />
      </div>
    </MagnifyingGlassStyled>
  );
}

export default MagnifyingGlass;
