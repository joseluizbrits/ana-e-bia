import React from "react";
import { Section } from "./ProductsStyled";
import Button from "../../components/Button/Button";
import { products } from "../../utils/products";

function Produtos() {
  return (
    <Section>
      <div className="title">
        <h2>Sabor feito com carinho</h2>
        <p>
          Nossos produtos são pequenas obras-primas de confeitaria, de cupcakes
          decorados a bolos elaborados. Cada mordida é uma experiência de
          sabores únicos e texturas perfeitas
        </p>
      </div>

      <div className="products">
        {products.map(({ name, type, desc, img, alt }) => (
          <div key={name} className={`candy ${type}`}>
            <div className="image">
              <img src={img} alt={alt} id={type} />
              <div className="shadow"></div>
            </div>
            <div className="text">
              <h3>{name}</h3>
              <p>{desc}</p>
              <Button className="rounded" color="gradient" text="Eu quero!" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Produtos;
