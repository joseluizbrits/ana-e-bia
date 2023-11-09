import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import Sweets from "../components/Sweets/Sweets";

type ProductType = {
  product: {
    type: string;
    name: string;
    title: string;
    circleColor: string;
    img: string;
    icon: JSX.Element;
    desc: {
      id: string;
      item: string;
      text: string;
      subItem: string;
      subText: string;
      img: string;
    }[];
  };
};

function Product({ product }: ProductType) {
  return (
    <>
      <Nav />
      <Hero
        img={product.img}
        text={[product.title]}
        circleColor={product.circleColor}
      />
      <Sweets />
      <Contact sweet={product.icon} theme="light" />
      <Footer theme="light" />
    </>
  );
}

export default Product;
