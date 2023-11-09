import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Sweets from "../components/Sweets/Sweets";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

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
      <ProductDescription desc={product.desc} name={product.name} />
      <Sweets />
      <Contact sweet={product.icon} theme="light" />
      <Footer theme="light" />
    </>
  );
}

export default Product;
