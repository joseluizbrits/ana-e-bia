import React from "react";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import History from "../components/History/History";
import Values from "../components/Values/Values";
import AboutConclusion from "../components/AboutConclusion/AboutConclusion";
import Contact from "../components/Contact/Contact";
import ButtonScrollTop from "../components/ButtonScrollTop/ButtonScrollTop";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";

import imgHero from "../assets/img/hero-about.jpg";
import Macaron from "../assets/svg/Macaron";

const Sweets = React.lazy(() => import("../components/Sweets/Sweets"));

function About() {
  return (
    <main className="container" style={{ background: "var(--p5)" }}>
      <Nav />
      <Hero
        img={imgHero}
        text={["Uma história doce", "Sobre família"]}
        circleColor={"rgba(255, 100, 136, 0.5)"}
      />
      <History />
      <Values />
      <AboutConclusion />
      <React.Suspense fallback={<Loading />}>
        <Sweets />
      </React.Suspense>
      <Contact sweet={<Macaron />} theme="light" />
      <ButtonScrollTop />
      <Footer theme="light" />
    </main>
  );
}

export default About;
