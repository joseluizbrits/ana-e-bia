import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Contact from "../components/Contact/Contact";
import MagnifyingGlass from "../components/MagnifyingGlass/MagnifyingGlass";
import TranslucentCard from "../components/TranslucentCard/TranslucentCard";
import ButtonScrollTop from "../components/ButtonScrollTop/ButtonScrollTop";
import Footer from "../components/Footer/Footer";

import imgHero from "../assets/img/hero-services.jpg";
import Macaron from "../assets/svg/Macaron";

function Services() {
  return (
    <main
      className="container"
      style={{ background: "var(--p3)", overflow: "hidden" }}
    >
      <Nav />
      <Hero img={imgHero} page="services" circleColor="transparent" />
      <MagnifyingGlass />
      <TranslucentCard />
      <Contact sweet={<Macaron />} theme="light" />
      <ButtonScrollTop />
      <Footer theme="light" />
    </main>
  );
}

export default Services;
