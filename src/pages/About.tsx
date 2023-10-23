import React from "react";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";

import imgHero from "../assets/hero-about.jpg";

function About() {
  return (
    <>
      <Nav />
      <Hero
        img={imgHero}
        text={["Uma história doce", "Sobre família"]}
        circleColor={"rgba(255, 100, 136, 0.5)"}
      />
    </>
  );
}

export default About;
