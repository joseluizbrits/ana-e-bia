import React from "react";
import { ValuesStyled } from "./ValuesStyled";
import Check from "../../assets/svg/Check";
import Cookie from "../../assets/svg/Cookie";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Values() {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-values",
            start: "top 80%",
            end: "bottom center",
          },
        })
        .from(".section-values .card", {
          opacity: 0,
          ease: "power3.out",
        })
        .from(
          ".section-values .card p",
          {
            x: -100,
            opacity: 0,
          },
          "-=0.5"
        )
        .from(
          ".section-values .card li",
          {
            y: -100,
            opacity: 0,
            stagger: 0.1,
          },
          "-=0.5"
        )
        .fromTo(
          ".section-values .card hr",
          {
            width: 0,
          },
          {
            width: "100%",
            stagger: 0.1,
          }
        )
        .from(
          ".card .born",
          {
            y: -100,
            opacity: 0,
          },
          "-=0.8"
        )
        .from(
          ".section-values .cookie",
          {
            scale: 0,
            rotate: "360deg",
            duration: 2,
          },
          "<-1"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <ValuesStyled className="section-values">
      <div className="card">
        <div className="wrapp">
          <p>
            À medida que crescemos, nossa paixão pela culinária doce também só
            cresceu, e assim com uma mistura de:
          </p>

          <ul>
            <li>
              <span>Tradição de Família</span>
              <Check />
            </li>

            <hr />

            <li>
              <span>Criatividade Artesanal</span>
              <Check />
            </li>

            <hr />

            <li>
              <span>Ética e Responabilidade</span>
              <Check />
            </li>
          </ul>

          <span className="born">
            Nasceu:{" "}
            <div className="logo">
              <span>Ana & Bia</span>
              <span>doces</span>
            </div>
          </span>

          <Cookie className="cookie" />
        </div>
      </div>
    </ValuesStyled>
  );
}

export default Values;
