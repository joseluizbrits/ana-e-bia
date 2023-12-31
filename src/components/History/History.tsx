import { HistoryStyled } from "./HistoryStyled";
import { HistoryAnimation } from "./HistoryAnimation";
import sisters from "../../assets/img/sisters.jpg";
import grandmother from "../../assets/img/grandmother.jpg";

function History() {
  HistoryAnimation();

  return (
    <HistoryStyled className="section-history">
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

      <div className="card card-sisters">
        <div className="wrapp">
          <div className="image">
            <img
              src={sisters}
              alt="Duas mulheres de avental servindo à mesa com doces de confeitaria"
            />
          </div>

          <p>
            Somos duas irmãs, Ana e Bia, cuja jornada na confeitaria começou nas
            tardes ensolaradas da nossa infância, na cozinha acolhedora da casa
            da nossa amada vovó
          </p>
        </div>

        <div className="circle circle-sisters"></div>
      </div>

      <div className="card card-grandmother">
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
      </div>
    </HistoryStyled>
  );
}

export default History;
