import React from "react";
import { HistoryStyled } from "./HistoryStyled";
import sisters from "../../assets/sisters.jpg";
import grandmother from "../../assets/grandmother.jpg";

function History() {
  return (
    <section>
      <HistoryStyled>
        <div className="circle top"></div>

        <div className="title">
          <div className="logo">
            <span>Ana & Bia</span>
            <span>doces</span>
          </div>
          <h2>
            <p>Um pedaço da história de uma família</p>
            <p>Muito mais que uma simples confeitaria</p>
          </h2>
        </div>

        <div className="card sisters">
          <div className="wrapp">
            <div className="image">
              <img
                src={sisters}
                alt="Duas mulheres de avental servindo à mesa com doces de confeitaria"
              />
            </div>

            <p>
              Somos duas irmãs, Ana e Bia, cuja jornada na confeitaria começou
              nas tardes ensolaradas da nossa infância, na cozinha acolhedora da
              casa da nossa amada vovó
            </p>
          </div>

          <div className="circle sisters"></div>
        </div>

        <div className="card grandmother">
          <div className="wrapp">
            <div className="image">
              <img src={grandmother} alt="Senhora de óculos modelando massa" />
            </div>

            <p>
              Nossa vovó era uma mestra na arte de transformar ingredientes
              simples em sobremesas deliciosas. A lembrança do cheiro de bolo
              assando em sua pequena casa sempre foi a base do nosso amor pela
              confeitaria
            </p>
          </div>

          <div className="circle grandmother"></div>
        </div>
      </HistoryStyled>
    </section>
  );
}

export default History;
