import React from "react";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Products from "../containers/Products/Products";

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Products />
    </>
  );
}

export default Home;
