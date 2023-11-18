import { ServicesGridStyled } from "./ServicesGridStyled";
import { ServicesGridAnimation } from "./ServicesGridAnimation";
import Cupcake from "../../assets/svg/Cupcake";
import Button from "../Button/Button";
import useMedia from "../../hooks/useMedia";
import { servicesGrid } from "../../utils/services";

function Services() {
  const mobile = useMedia("(max-width: 1300px)");
  ServicesGridAnimation(mobile, servicesGrid);

  return (
    <ServicesGridStyled className="section-services">
      <div className="title">
        <Cupcake />
        <h2>Nossos servicos</h2>
      </div>

      <ul className="cards">
        {servicesGrid.map(({ id, title, desc, icon }) => (
          <li key={id} className={id}>
            <div className="circle">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </li>
        ))}
      </ul>

      <div className="sub-title">
        <h3>Atendimento profissional</h3>

        <p>
          Nossa equipe garante que as sobremesas sejam servidas com sabor e
          estética, propriciando uma experiência mágica sem grandes preocupações
        </p>

        <Button
          className="rounded"
          color="gradient"
          text="Saiba mais"
          href="/servicos"
        />
      </div>
    </ServicesGridStyled>
  );
}

export default Services;
