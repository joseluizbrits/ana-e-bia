import React from "react";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Products from "../containers/Products/Products";
import Form from "../components/Contact/Contact";
import Services from "../containers/Services/Services";

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Products />
      <Form />
      <Services />
    </>
  );
}

export default Home;
