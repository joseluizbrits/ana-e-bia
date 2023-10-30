import React from "react";
import Hero from "../components/Hero/Hero";

import Nav from "../components/Nav/Nav";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import MagnifyingGlass from "../components/MagnifyingGlass/MagnifyingGlass";

import imgHero from "../assets/hero-services.jpg";
import Macaron from "../assets/svg/Macaron";
import TranslucentCard from "../components/TranslucentCard/TranslucentCard";

function Services() {
  return (
    <main className="container" style={{ background: "var(--p3)" }}>
      <Nav />
      <Hero img={imgHero} type="services" />
      <MagnifyingGlass />
      <TranslucentCard />
      <Contact sweet={<Macaron />} theme="light" />
      <Footer theme="light" />
    </main>
  );
}

export default Services;
