import React from "react";
import { ServicesGridStyled } from "./ServicesGridStyled";
import Cupcake from "../../assets/svg/Cupcake";
import Button from "../Button/Button";
import { servicesGrid } from "../../utils/services";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Services() {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".section-services .title", {
        scrollTrigger: {
          trigger: ".section-services .title",
          start: "-=100px center",
          end: "bottom center",
        },
        opacity: 0,
        x: 600,
        ease: "power3.out",
        duration: 1,
      });

      gsap.matchMedia().add("(min-width: 1300px)", () => {
        gsap.from(`.section-services .cards li`, {
          scrollTrigger: {
            trigger: `.section-services .cards`,
            start: "-=200px center",
            end: "bottom center",
          },
          opacity: 0,
          y: 200,
          ease: "power3.out",
          stagger: 0.3,
          duration: 1,
        });
      });

      gsap.matchMedia().add("(max-width: 1300px)", () => {
        servicesGrid.forEach(({ id }) => {
          gsap.from(`.section-services .cards .${id}`, {
            scrollTrigger: {
              trigger: `.section-services .cards .${id}`,
              start: "-=260px center",
              end: "bottom center",
            },
            opacity: 0,
            y: 200,
            ease: "power3.out",
            duration: 1,
          });
        });
      });

      gsap.from(".section-services .sub-title", {
        scrollTrigger: {
          trigger: `.section-services .sub-title`,
          start: "-=64px 80%",
          end: "bottom center",
        },
        opacity: 0,
        x: -100,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <ServicesGridStyled className="section-services">
      <div className="title">
        <Cupcake />
        <h2>Nossos servicos</h2>
      </div>

      <ul className="cards">
        {servicesGrid.map(({ id, title, desc, icon }) => (
          <li key={id} className={id}>
            <div className="circle">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </li>
        ))}
      </ul>

      <div className="sub-title">
        <h3>Atendimento profissional</h3>

        <p>
          Nossa equipe garante que as sobremesas sejam servidas com sabor e
          estética, propriciando uma experiência mágica sem grandes preocupações
        </p>

        <Button
          className="rounded"
          color="gradient"
          text="Saiba mais"
          href="/servicos"
        />
      </div>
    </ServicesGridStyled>
  );
}

export default Services;
