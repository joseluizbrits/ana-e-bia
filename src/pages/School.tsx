import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";

import Teaching from "../components/Teaching/Teaching";
import HandsOnLearning from "../components/HandsOnLearning/HandsOnLearning";
import Register from "../components/Register/Register";
import Footer from "../components/Footer/Footer";

import imgHero from "../assets/img/hero-school.jpg";

function School() {
  return (
    <main className="container" style={{ background: "var(--p1)" }}>
      <Nav />
      <Hero img={imgHero} page="school" circleColor="transparent" />
      <Teaching />
      <HandsOnLearning />
      <Register />
      <Footer theme="white" />
    </main>
  );
}

export default School;
