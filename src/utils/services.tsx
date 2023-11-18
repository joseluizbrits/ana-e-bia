import imgEvents from "../assets/img/services-events.jpg";
import imgMenus from "../assets/img/services-menus.jpg";
import imgDecorations from "../assets/img/services-decorations.jpg";
import CakeServices from "../assets/svg/CakeServices";
import MenuServices from "../assets/svg/MenuServices";
import DeliveryServices from "../assets/svg/DeliveryServices";

export const services = [
  {
    id: "events",
    type: "eventos",
    title: "Eventos personalizados",
    desc: "Mesas de sobremesas temáticas com uma variedade de doces, bolos e outras delícias que se encaixam perfeitamente no tema do evento",
    tags: ["casamentos", "aniversários", "confraternizações"],
    nav: true,
    img: imgEvents,
  },
  {
    id: "menus",
    type: "cardápios",
    title: "Cardápios diversificados",
    desc: "Menu com ampla variedade de bolos, cookies, donuts, macarons e outros doces que podem ser personalizados de acordo com as necessidades do evento",
    tags: ["temas", "sabores", "estética"],
    nav: true,
    img: imgMenus,
  },
  {
    id: "decorations",
    type: "decorações",
    title: "Apresentação Elegante",
    desc: "Decorações e designs que complementam a estética do evento, criando uma experiência gastronômica deliciosa e visualmente impressionante",
    tags: ["decoração", "ornamentação", "composição"],
    nav: false,
    img: imgDecorations,
  },
  {
    id: "assistance",
    type: "atendimento",
    title: "Atendimento profissional",
    desc: "Equipe dedicada a oferecer atendimento profissional durante o evento, garantindo que as sobremesas sejam servidas com perfeição e que os convidados desfrutem de uma experiência agradável",
    tags: ["equipe", "organização", "monitoramento"],
    nav: false,
  },
  {
    id: "deliveries",
    type: "entregas",
    title: "Serviço de entrega",
    desc: "Equipe especializada em logística, com veículos adaptados para facilitar o transporte dos doces até o local do evento. Garantia que as sobremesas serão entregues sem perder o sabor e a estética",
    tags: ["transporte", "encomenda", "acessibilidade"],
    nav: true,
  },
];

export const servicesGrid = [
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
