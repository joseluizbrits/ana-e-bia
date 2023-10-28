import React from "react";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import Products from "../components/Products/Products";
import Contact from "../components/Contact/Contact";
import Services from "../components/Services/Services";
import School from "../components/School/School";
import Questions from "../components/Questions/Questions";
import Footer from "../components/Footer/Footer";
import Cake from "../assets/svg/Cake";
import imgHero from "../assets/hero-home.jpg";

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
      <Services />
      <School />
      <Questions />
      <Footer />
    </>
  );
}

export default Home;
