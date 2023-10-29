import { ServicesGridStyled } from "./ServicesGridStyled";
import Cupcake from "../../assets/svg/Cupcake";
import CakeServices from "../../assets/svg/CakeServices";
import MenuServices from "../../assets/svg/MenuServices";
import DeliveryServices from "../../assets/svg/DeliveryServices";
import Button from "../Button/Button";

const services = [
  {
    id: "events",
    title: "Eventos",
    desc: "Sobremesas temáticas, apresentando uma variedade de doces, bolos e outras delícias que se encaixam no tema do seu evento",
    icon: <CakeServices />,
  },
  {
    id: "menus",
    title: "Cardápios",
    desc: "Inclui uma ampla variedade de bolos, cookies, donuts, macarons e outros doces que podem ser personalizados de acordo com suas necessidades",
    icon: <MenuServices />,
  },
  {
    id: "deliveries",
    title: "Entregas",
    desc: "Oferecemos entrega em domícilio para garantir que as decorações e designs das suas sobremesas cheguem perfeitas no local desejado",
    icon: <DeliveryServices />,
  },
];

function Services() {
  return (
    <ServicesGridStyled>
      <div className="title">
        <Cupcake />
        <h2>Nossos servicos</h2>
      </div>
      <div className="cards">
        {services.map(({ id, title, desc, icon }) => (
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
        <Button className="rounded" color="gradient" text="Saiba mais" />
      </div>
    </ServicesGridStyled>
  );
}

export default Services;
