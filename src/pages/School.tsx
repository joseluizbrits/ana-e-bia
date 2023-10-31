import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";

import imgHero from "../assets/hero-school.jpg";
import Teaching from "../components/Teaching/Teaching";
import HandsOnLearning from "../components/HandsOnLearning/HandsOnLearning";
import Footer from "../components/Footer/Footer";

function School() {
  return (
    <>
      <Nav />
      <Hero img={imgHero} page="school" />
      <Teaching />
      <HandsOnLearning />
      <Footer theme="white" />
    </>
  );
}

export default School;
