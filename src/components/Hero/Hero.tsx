import React from "react";
import { Background } from "./HeroStyled";

import gsap from "gsap";

function Hero() {
  React.useEffect(() => {
    gsap.from(".circle", {
      duration: 1,
      y: -100,
      opacity: 0,
    });
  }, []);

  return (
    <Background>
      <h1>
        <div className="one">
          <div className="circle"></div>
          <p>Delícias doces em um paraíso açucarado</p>
        </div>
        <div className="two">
          <div className="circle"></div>
          <p>Sabores celestiais que derretem na boca</p>
        </div>
      </h1>
    </Background>
  );
}

export default Hero;
