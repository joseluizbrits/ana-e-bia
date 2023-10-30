import React from "react";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";

import imgHero from "../assets/hero-school.jpg";

function School() {
  return (
    <>
      <Nav />
      <Hero img={imgHero} type="school" />
    </>
  );
}

export default School;
