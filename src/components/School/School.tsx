import React from "react";
import { SchoolStyled } from "./SchoolStyled";
import Button from "../Button/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function School() {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".section-school", {
        scrollTrigger: {
          trigger: ".section-school",
          start: "top 80%",
          end: "bottom center",
        },
        "--circleScale": 0,
        "--circlePosition": "translate(500px, -500px)",
        // opacity: 0,
        ease: "power3.out",
        duration: 3,
        delay: 0.5,
      });

      gsap.from(".section-school .description", {
        scrollTrigger: {
          trigger: ".section-school",
          start: "+=20% 80%",
          end: "bottom center",
        },
        opacity: 0,
        x: -600,
        ease: "power3.out",
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <SchoolStyled className="section-school">
      <div className="description">
        <h2>
          <span>Ana & Bia</span>
          <span>escola de doces</span>
        </h2>

        <p>
          Oficinas e aulas para aqueles que desejam aprender a arte da
          confeitaria
        </p>

        <Button
          className="rounded outline"
          color="none"
          text="Inscreva-se"
          href="/escola"
        />
      </div>
    </SchoolStyled>
  );
}

export default School;
