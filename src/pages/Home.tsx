import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import Contact from "../components/Contact/Contact";
import ServicesGrid from "../components/ServicesGrid/ServicesGrid";
import School from "../components/School/School";
import Questions from "../components/Questions/Questions";
import ButtonScrollTop from "../components/ButtonScrollTop/ButtonScrollTop";
import Footer from "../components/Footer/Footer";

import imgHero from "../assets/img/hero-home.jpg";
import Cake from "../assets/svg/Cake";

function Home() {
  return (
    <>
      <Nav />
      <Hero
        img={imgHero}
        text={[
          "Delícias doces em um paraíso açucarado",
          "Sabores celestiais que derretem na boca",
        ]}
        circleColor={"rgb(255, 150, 174)"}
      />
      <Products />
      <Contact sweet={<Cake />} />
      <ServicesGrid />
      <School />
      <Questions />
      <ButtonScrollTop />
      <Footer />
    </>
  );
}

export default Home;
