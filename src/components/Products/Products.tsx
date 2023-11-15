import React from "react";
import { NavLink } from "react-router-dom";
import { Section } from "./ProductsStyled";
import Button from "../Button/Button";
import { products } from "../../utils/products";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Produtos() {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".section-products .title", {
        scrollTrigger: {
          trigger: ".section-products .title",
          start: "top center",
          end: "bottom center",
        },
        x: -600,
        opacity: 0,
      });

      gsap.from(".candy .image", {
        scrollTrigger: {
          trigger: ".candy",
          start: "top 80%",
          end: "bottom center",
        },
        scale: 0,
      });

      products.forEach(({ type }) => {
        gsap.from(`.candy.${type}`, {
          scrollTrigger: {
            trigger: `.candy.${type}`,
            toggleActions: "play none none none",
            start: "top 80%",
            end: "bottom center",
            markers: true,
          },
          opacity: 0,
          x: 100,
          delay: 0.5,
        });
      });
    });

    return () => ctx.revert();
  });

  return (
    <Section className="section-products">
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
            <NavLink to={`/${type}`} className="image">
              <img src={img} alt={alt} id={type} />
            </NavLink>

            <div className="text">
              <h3>{name}</h3>
              <p>{desc}</p>
              <Button
                className="rounded"
                color="gradient"
                text="Eu quero!"
                href="#contact"
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Produtos;
