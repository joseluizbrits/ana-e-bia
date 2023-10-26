import React from "react";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import History from "../components/History/History";
import Values from "../components/Values/Values";
import AboutConclusion from "../components/AboutConclusion/AboutConclusion";
import Sweets from "../components/Sweets/Sweets";

import imgHero from "../assets/hero-about.jpg";
import Swiper from "../components/Swiper/Swiper";

function About() {
  return (
    <>
      <Nav />
      <Hero
        img={imgHero}
        text={["Uma história doce", "Sobre família"]}
        circleColor={"rgba(255, 100, 136, 0.5)"}
      />
      <History />
      <Values />
      <AboutConclusion />
      <Sweets />
    </>
  );
}

export default About;
