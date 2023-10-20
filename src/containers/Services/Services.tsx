import React from "react";
import { ServicesStyled } from "./ServicesStyled";
import Cupcake from "../../assets/svg/Cupcake";
import CakeServices from "../../assets/svg/CakeServices";
import MenuServices from "../../assets/svg/MenuServices";
import DeliveryServices from "../../assets/svg/DeliveryServices";

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
    <ServicesStyled>
      <div className="title">
        <Cupcake />
        <h2>Nossos serviços</h2>
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
    </ServicesStyled>
  );
}

export default Services;
