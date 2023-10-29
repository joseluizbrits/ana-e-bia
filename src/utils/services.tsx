import imgEvents from "../assets/services-events.jpg";
import imgMenus from "../assets/services-menus.jpg";
import imgDecorations from "../assets/services-decorations.jpg";

export const services = [
  {
    type: "eventos",
    title: "Eventos personalizados",
    desc: "Mesas de sobremesas temáticas com uma variedade de doces, bolos e outras delícias que se encaixam perfeitamente no tema do evento",
    tags: ["casamentos", "aniversários", "confraternizações"],
    nav: true,
    img: imgEvents,
  },
  {
    type: "cardápios",
    title: "Cardápios diversificados",
    desc: "Menu com ampla variedade de bolos, cookies, donuts, macarons e outros doces que podem ser personalizados de acordo com as necessidades do evento",
    tags: ["temas", "sabores", "estética"],
    nav: true,
    img: imgMenus,
  },
  {
    type: "decorações",
    title: "Apresentação Elegante",
    desc: "Decorações e designs que complementam a estética do evento, criando uma experiência gastronômica deliciosa e visualmente impressionante",
    tags: ["decoração", "ornamentação", "composição"],
    nav: false,
    img: imgDecorations,
  },
  {
    type: "atendimento",
    title: "Atendimento profissional",
    desc: "Equipe dedicada a oferecer atendimento profissional durante o evento, garantindo que as sobremesas sejam servidas com perfeição e que os convidados desfrutem de uma experiência agradável",
    tags: ["equipe", "organização", "monitoramento"],
    nav: false,
  },
  {
    type: "entregas",
    title: "Serviço de entrega",
    desc: "Equipe especializada em logística, com veículos adaptados para facilitar o transporte dos doces até o local do evento. Garantia que as sobremesas serão entregues sem perder o sabor e a estética",
    tags: ["transporte", "encomenda", "acessibilidade"],
    nav: true,
  },
];
