import { SchoolStyled } from "./SchoolStyled";
import { SchoolAnimation } from "./SchoolAnimation";
import Button from "../Button/Button";

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

        <Button
          className="rounded outline"
          color="none"
          text="Inscreva-se"
          href="/escola"
        />
      </div>
    </SchoolStyled>
  );
}

export default School;
