import { ServicesGridStyled } from "./ServicesGridStyled";
import Cupcake from "../../assets/svg/Cupcake";
import { servicesGrid } from "../../utils/services";
import Button from "../Button/Button";

function Services() {
  return (
    <ServicesGridStyled>
      <div className="title">
        <Cupcake />
        <h2>Nossos servicos</h2>
      </div>

      <div className="cards">
        {servicesGrid.map(({ id, title, desc, icon }) => (
          <div key={id} className={id}>
            <div className="circle">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>

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
