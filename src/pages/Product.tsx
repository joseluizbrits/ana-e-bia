import React from "react";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Sweets = React.lazy(() => import("../components/Sweets/Sweets"));

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
      <React.Suspense fallback={<div>Carregando...</div>}>
        <Sweets />
      </React.Suspense>
      <Contact sweet={product.icon} theme="light" />
      <Footer theme="light" />
    </>
  );
}

export default Product;
