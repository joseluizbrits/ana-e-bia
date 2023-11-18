import React from "react";
import { HistoryStyled } from "./HistoryStyled";
import sisters from "../../assets/img/sisters.jpg";
import grandmother from "../../assets/img/grandmother.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function History() {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".section-history", {
        scrollTrigger: {
          trigger: ".section-history .title",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
        "--circleTop": -400,
        "--circleLeft": -400,
      });

      gsap.from(".section-history .title", {
        scrollTrigger: {
          trigger: ".section-history .title",
          start: "top 80%",
          end: "center center",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
      });

      gsap.from(".card-sisters", {
        scrollTrigger: {
          trigger: ".section-history .title",
          start: "top 80%",
          end: "80% center",
          scrub: 1,
        },
        "--circleSisTop": 0,
        "--circleSisRight": -400,
      });

      gsap.from(".card-sisters .wrapp > *", {
        scrollTrigger: {
          trigger: ".card-sisters",
          start: "top center",
          end: "center center",
        },
        x: -200,
        opacity: 0,
        ease: "power3.out",
        duration: 1,
      });

      gsap.from(".card-grandmother .wrapp > *", {
        scrollTrigger: {
          trigger: ".card-grandmother",
          start: "top center",
          end: "center center",
        },
        x: 200,
        opacity: 0,
        ease: "power3.out",
        duration: 1,
      });

      gsap.from(".card-grandmother", {
        scrollTrigger: {
          trigger: ".card-grandmother",
          start: "40% 70%",
          end: "70% center",
          scrub: 1,
        },
        "--circleGrandmaTop": -400,
        "--circleGrandmaLeft": -400,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <HistoryStyled className="section-history">
      <div className="title">
        <div className="logo">
          <span>Ana & Bia</span>
          <span>doces</span>
        </div>

        <h2>
          <p>Um pedaço da história de uma família</p>
          <p>Muito mais que uma simples confeitaria</p>
        </h2>
      </div>

      <div className="card card-sisters">
        <div className="wrapp">
          <div className="image">
            <img
              src={sisters}
              alt="Duas mulheres de avental servindo à mesa com doces de confeitaria"
            />
          </div>

          <p>
            Somos duas irmãs, Ana e Bia, cuja jornada na confeitaria começou nas
            tardes ensolaradas da nossa infância, na cozinha acolhedora da casa
            da nossa amada vovó
          </p>
        </div>

        <div className="circle circle-sisters"></div>
      </div>

      <div className="card card-grandmother">
        <div className="wrapp">
          <div className="image">
            <img src={grandmother} alt="Senhora de óculos modelando massa" />
          </div>

          <p>
            Nossa vovó era uma mestra na arte de transformar ingredientes
            simples em sobremesas deliciosas. A lembrança do cheiro de bolo
            assando em sua pequena casa sempre foi a base do nosso amor pela
            confeitaria
          </p>
        </div>
      </div>
    </HistoryStyled>
  );
}

export default History;
