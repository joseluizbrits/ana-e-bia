import React from "react";
import Hero from "../components/Hero/Hero";

import imgHero from "../assets/hero-services.jpg";
import Nav from "../components/Nav/Nav";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Donut from "../assets/svg/Donut";

function Services() {
  return (
    <div className="container" style={{ background: "var(--p3)" }}>
      <Nav />
      <Hero img={imgHero} type="services" />
      <Contact sweet={<Donut />} theme="light" />
      <Footer theme="light" />
    </div>
  );
}

export default Services;
