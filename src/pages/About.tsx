import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import History from "../components/History/History";
import Values from "../components/Values/Values";
import AboutConclusion from "../components/AboutConclusion/AboutConclusion";
import Sweets from "../components/Sweets/Sweets";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

import imgHero from "../assets/hero-about.jpg";
import Macaron from "../assets/svg/Macaron";

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
      <Sweets />
      <Contact sweet={<Macaron />} theme="light" />
      <Footer theme="light" />
    </main>
  );
}

export default About;
