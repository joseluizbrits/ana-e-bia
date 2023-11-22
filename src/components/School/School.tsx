import { Link } from "react-router-dom";
import { SchoolStyled } from "./SchoolStyled";
import { SchoolAnimation } from "./SchoolAnimation";

function School() {
  SchoolAnimation();

  return (
    <SchoolStyled className="section-school">
      <div className="description">
        <h2>
          <span>Ana & Bia</span>
          <span>escola de doces</span>
        </h2>
        <p>
          Oficinas e aulas para aqueles que desejam aprender a arte da
          confeitaria
        </p>

        <Link to="/escola">Inscreva-se</Link>
      </div>
    </SchoolStyled>
  );
}

export default School;
