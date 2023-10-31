import { ValuesStyled } from "./ValuesStyled";
import Check from "../../assets/svg/Check";
import Cookie from "../../assets/svg/Cookie";

function Values() {
  return (
    <ValuesStyled>
      <div className="card">
        <div className="wrapp">
          <p>
            À medida que crescemos, nossa paixão pela culinária doce também só
            cresceu, e assim com uma mistura de:
          </p>

          <ul>
            <li>
              <span>Tradição de Família</span>
              <Check />
            </li>

            <hr />

            <li>
              <span>Criatividade Artesanal</span>
              <Check />
            </li>

            <hr />

            <li>
              <span>Ética e Responabilidade</span>
              <Check />
            </li>
          </ul>

          <span className="born">
            Nasceu:{" "}
            <div className="logo">
              <span>Ana & Bia</span>
              <span>doces</span>
            </div>
          </span>

          <Cookie className="cookie" />
        </div>
      </div>
    </ValuesStyled>
  );
}

export default Values;
