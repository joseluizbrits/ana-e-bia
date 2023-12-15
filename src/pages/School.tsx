import Head from "../components/Head/Head";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Teaching from "../components/Teaching/Teaching";
import HandsOnLearning from "../components/HandsOnLearning/HandsOnLearning";
import Register from "../components/Register/Register";
import ButtonScrollTop from "../components/ButtonScrollTop/ButtonScrollTop";
import Footer from "../components/Footer/Footer";

import imgHero from "../assets/img/hero-school.jpg";

function School() {
  return (
    <>
      <Head
        title="Escola de Confeitaria"
        description="Desperte a sua paixão pela confeitaria na nossa Escola de Confeitaria. Aprenda com especialistas, mergulhe em técnicas criativas e descubra o doce mundo da Ana & Bia."
      />
      <main className="container" style={{ background: "var(--p1)" }}>
        <Nav />
        <Hero img={imgHero} page="school" circleColor="transparent" />
        <Teaching />
        <HandsOnLearning />
        <Register />
        <ButtonScrollTop />
        <Footer theme="white" />
      </main>
    </>
  );
}

export default School;
