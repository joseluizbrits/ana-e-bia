import React from "react";
import { Background } from "./HeroStyled";

import gsap from "gsap";
import ArrowCircleDown from "../../assets/svg/ArrowCircleDown";

import { services } from "../../utils/services";

type HeroProps = {
  img: string;
  text?: string[];
  type?: "services" | "school";
  circleColor?:
    | "rgba(255, 100, 136, 0.5)"
    | "rgba(255, 100, 136, 0.8)"
    | "rgba(255, 150, 174, 0.5)"
    | "rgb(255, 150, 174)";
};

function Hero({ img, text, type, circleColor }: HeroProps) {
  React.useEffect(() => {
    circleColor &&
      gsap.from(".circle", {
        duration: 1,
        y: -100,
        opacity: 0,
      });
  }, [circleColor]);

  return (
    <Background
      style={{
        background: `url(${img}) center center`,
        backgroundSize: "cover",
      }}
    >
      <h1>
        {text?.map((t, i) => (
          <div key={t} className={`text-${i + 1}`}>
            {circleColor && (
              <div className="circle" style={{ background: circleColor }}></div>
            )}
            <p>{t}</p>
          </div>
        ))}

        {type && (
          <div className={`title-${type}`}>
            <span>Nossos serviços</span>
            <ArrowCircleDown />
          </div>
        )}
      </h1>

      {type === "services" && (
        <nav className="nav-services">
          <ul>
            {services.map(
              ({ type }, index) => index < 3 && <li key={type}>{type}</li>
            )}
          </ul>
        </nav>
      )}
    </Background>
  );
}

export default Hero;
