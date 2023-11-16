import React from "react";
import { AboutConclusionStyled } from "./AboutConclusionStyled";
import Donut from "../../assets/svg/Donut";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AboutConclusion() {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".section-aboutConclusion .text :nth-child(1)", {
        scrollTrigger: {
          trigger: ".section-aboutConclusion",
          start: "20% 80%",
          end: "75% center",
          scrub: 1,
        },
        x: -200,
        opacity: 0.6,
      });

      gsap.from(".section-aboutConclusion .text :nth-child(2)", {
        scrollTrigger: {
          trigger: ".section-aboutConclusion",
          start: "20% 80%",
          end: "75% center",
          scrub: 1,
        },
        x: 200,
        opacity: 0.6,
      });

      gsap.from(".section-aboutConclusion svg", {
        scrollTrigger: {
          trigger: ".section-aboutConclusion svg",
          start: "top center",
          end: "60% center",
          scrub: 1,
        },
        x: -200,
        y: 60,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <AboutConclusionStyled className="section-aboutConclusion">
      <div className="text">
        <p>
          Em cada bolo, cookie, macaron e sobremesa que oferecemos você encontra
          a doçura das nossas memórias de infância e o sabor autêntico da{" "}
          <strong>confeitaria artesanal</strong>
        </p>
        <p>
          <strong>Ana & Bia Doces</strong> é mais do que uma simples
          confeitaria; é um pedaço da história da nossa família
        </p>
      </div>
      <Donut />
    </AboutConclusionStyled>
  );
}

export default AboutConclusion;
