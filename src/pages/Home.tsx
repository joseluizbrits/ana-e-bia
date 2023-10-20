import React from "react";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import Form from "../components/Contact/Contact";
import Services from "../components/Services/Services";
import School from "../components/School/School";

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Products />
      <Form />
      <Services />
      <School />
    </>
  );
}

export default Home;
