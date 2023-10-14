import React from "react";
import { Background, Title, Text, Circle } from "./HeroStyled";

import gsap from "gsap";

function Hero() {
  React.useEffect(() => {
    gsap.from(".text", {
      delay: 1,
      duration: 1,
      opacity: 0,
      y: -100,
      stagger: {
        from: "start",
        amount: 0.5,
      },
    });

    gsap.from(".circle", {
      delay: 1.5,
      duration: 1,
      scale: 0,
      y: -10,
      ease: "power1.inOut",
      stagger: {
        from: "center",
      },
    });

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(".circle", {
      duration: 1.2,
      x: 10,
      y: 10,
      ease: "sine",
    });

    tl.play();
  }, []);

  return (
    <Background>
      <Title className="title">
        <Text className="one">
          <Circle className="circle c-one" />
          <span className="text">Delícias doces em um paraíso açucarado</span>
        </Text>
        <Text className="two">
          <Circle className="circle c-two" />
          <span className="text">Sabores celestiais que derretem na boca</span>
        </Text>
      </Title>
    </Background>
  );
}

export default Hero;
