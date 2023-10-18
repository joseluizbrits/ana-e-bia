import React from "react";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Products from "../containers/Products/Products";
import Form from "../components/Contact/Contact";

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Products />
      <Form />
    </>
  );
}

export default Home;
