import React from "react";
import { HandsOnLearningStyled } from "./HandsOnLearningStyled";
import choco from "../../assets/img/choco-handsOn.jpg";
import cake from "../../assets/img/cake-handsOn.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HandsOnLearning() {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".section-hands-on .title h2 > *", {
        scrollTrigger: {
          trigger: ".section-hands-on",
          start: "top 80%",
          end: "bottom center",
        },
        x: -200,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
        duration: 1,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".p-1",
            start: "30% 80%",
            end: "bottom 60%",
          },
        })
        .from(".p-1 img", {
          x: -100,
          y: -100,
          scale: 0.8,
          opacity: 0,
          ease: "power3.out",
          duration: 1,
        })
        .from(
          ".p-1 p",
          {
            x: -200,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
          },
          "<+0.2"
        );

      gsap.from(".p-2 p", {
        scrollTrigger: {
          trigger: ".p-2",
          start: "30% 80%",
          end: "bottom center",
        },
        x: -200,
        opacity: 0,
        ease: "power3.out",
        duration: 1,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".p-3",
            start: "30% 80%",
            end: "bottom 60%",
            markers: true,
          },
        })
        .from(".p-3 p", {
          x: -200,
          opacity: 0,
          ease: "power3.out",
          duration: 1,
        })
        .from(
          ".p-3 img",
          {
            x: -140,
            y: 100,
            scale: 0.8,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
          },
          "<+0.2"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <HandsOnLearningStyled className="section-hands-on">
      <div className="title">
        <h2>
          <span>Hands-On Learning</span>
          <span>Mão na massa</span>
        </h2>
      </div>

      <div className="content">
        <div className="paragraph p-1">
          <img src={choco} alt="Pedaços de chocolate na palma das mãos" />
          <p>
            As aulas são práticas, fazendo com que você esteja sempre com a mão
            na massa
          </p>
        </div>

        <div className="paragraph p-2">
          <p>
            Nós oferecemos todos os ingredientes e ferramentas necessários
            durante as aulas para que você não precise se preocuar em comprar
            suprimentos
          </p>
        </div>

        <div className="paragraph p-3">
          <p>
            Isso significa que você terá a oportunidade de criar suas próprias
            sobremesas sem estresse
          </p>
          <img src={cake} alt="Bolo de chocolate na palma das mãos" />
        </div>
      </div>
    </HandsOnLearningStyled>
  );
}

export default HandsOnLearning;
