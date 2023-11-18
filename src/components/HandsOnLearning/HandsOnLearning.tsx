import { HandsOnLearningStyled } from "./HandsOnLearningStyled";
import { HandsOnLearningAnimation } from "./HandsOnLearningAnimation";
import choco from "../../assets/img/choco-handsOn.jpg";
import cake from "../../assets/img/cake-handsOn.jpg";

function HandsOnLearning() {
  HandsOnLearningAnimation();

  return (
    <HandsOnLearningStyled className="section-hands-on">
      <div className="title">
        <h2>
          <span>Hands-On Learning</span>
          <span>Mão na massa</span>
        </h2>
      </div>

      <div className="content">
        <div className="paragraph p-1">
          <img src={choco} alt="Pedaços de chocolate na palma das mãos" />
          <p>
            As aulas são práticas, fazendo com que você esteja sempre com a mão
            na massa
          </p>
        </div>

        <div className="paragraph p-2">
          <p>
            Nós oferecemos todos os ingredientes e ferramentas necessários
            durante as aulas para que você não precise se preocuar em comprar
            suprimentos
          </p>
        </div>

        <div className="paragraph p-3">
          <p>
            Isso significa que você terá a oportunidade de criar suas próprias
            sobremesas sem estresse
          </p>
          <img src={cake} alt="Bolo de chocolate na palma das mãos" />
        </div>
      </div>
    </HandsOnLearningStyled>
  );
}

export default HandsOnLearning;
