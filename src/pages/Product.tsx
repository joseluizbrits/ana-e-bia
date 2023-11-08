import React from "react";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";

type ProductType = {
  product: {
    type: string;
    name: string;
    title: string;
    circleColor: string;
    img: string;
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
    </>
  );
}

export default Product;
