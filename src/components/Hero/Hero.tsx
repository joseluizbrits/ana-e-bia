import React from "react";
import { Background } from "./HeroStyled";

import gsap from "gsap";

type HeroProps = {
  img: string;
  text: string[];
  circleColor?:
    | "rgba(255, 100, 136, 0.5)"
    | "rgba(255, 100, 136, 0.8)"
    | "rgba(255, 150, 174, 0.5)"
    | "rgb(255, 150, 174)";
};

function Hero({ img, circleColor, text }: HeroProps) {
  React.useEffect(() => {
    gsap.from(".circle", {
      duration: 1,
      y: -100,
      opacity: 0,
    });
  }, []);

  return (
    <Background
      style={{
        background: `url(${img}) center center`,
        backgroundSize: "cover",
      }}
    >
      <h1>
        {text.map((t, i) => (
          <div key={t} className={`text-${i + 1}`}>
            {circleColor && (
              <div className="circle" style={{ background: circleColor }}></div>
            )}
            <p>{t}</p>
          </div>
        ))}
      </h1>
    </Background>
  );
}

export default Hero;
