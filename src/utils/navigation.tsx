import imgHome from "../assets/img/cake-desc-1.jpg";
import imgAbout from "../assets/img/hero-about.jpg";
import imgServices from "../assets/img/hero-services.jpg";
import imgSchool from "../assets/img/hero-school.jpg";

export const navigation = [
  {
    page: "home",
    route: "/",
    img: imgHome,
    alt: "Pão doce com recheio cremoso",
  },
  {
    page: "sobre",
    route: "/sobre",
    img: imgAbout,
    alt: "Bolo",
  },
  {
    page: "serviços",
    route: "/servicos",
    img: imgServices,
    alt: "Donut",
  },
  {
    page: "escola",
    route: "/escola",
    img: imgSchool,
    alt: "Quatro donuts",
  },
];
