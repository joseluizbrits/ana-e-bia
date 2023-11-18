import React from "react";
import { HeroStyled } from "./HeroStyled";

import ArrowCircleDown from "../../assets/svg/ArrowCircleDown";

import { services } from "../../utils/services";

import gsap from "gsap";

type HeroProps = {
  img: string;
  text?: string[];
  page?: "services" | "school";
  circleColor: string;
};

function Hero({ img, text, page, circleColor }: HeroProps) {
  const nav = services.filter(({ nav }) => nav);

  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero", {
        "--circleScale": 0,
        duration: 1,
        delay: 1.5,
      });

      if (text)
        gsap.from(".hero p", {
          opacity: 0,
          y: -100,
          ease: "power2.inOut",
          duration: 1,
          delay: 1,
        });

      if (page === "services") {
        gsap.from(".title-services", {
          y: 100,
          opacity: 0,
          ease: "power3.out",
          duration: 1,
          delay: 0.8,
        });

        gsap.from(".nav-services li", {
          y: 100,
          opacity: 0,
          stagger: 0.1,
          ease: "power3.out",
          duration: 1,
          delay: 1.2,
        });
      }

      if (page === "school") {
        gsap.from(".title-school", {
          y: 100,
          opacity: 0,
          ease: "power3.out",
          duration: 1,
          delay: 0.8,
        });
      }
    });

    return () => ctx.revert();
  }, [text, page]);

  return (
    <HeroStyled
      className="hero"
      style={{
        background: `url(${img}) center center / cover`,
      }}
      $circleColor={circleColor}
    >
      <h1>
        {text?.map((t, i) => (
          <div key={t} className={`text-${i + 1}`}>
            <p>{t}</p>
          </div>
        ))}

        {page && (
          <div className={`title-${page}`}>
            {page === "services" ? (
              <span>Nossos servicos</span>
            ) : (
              <span>Escola de confeitaria</span>
            )}
            <ArrowCircleDown />
          </div>
        )}
      </h1>

      {page === "services" && (
        <nav className="nav-services">
          <ul>
            {nav.map(
              ({ id, type }, index) => index < 3 && <li key={id}>{type}</li>
            )}
          </ul>
        </nav>
      )}
    </HeroStyled>
  );
}

export default Hero;
