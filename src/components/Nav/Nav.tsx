import React from "react";
import { Header, Hamburger, Logo } from "./NavStyled";
import Button from "../Button/Button";

import gsap from "gsap";

function Nav() {
  React.useEffect(() => {
    gsap.from("header", {
      duration: 1,
      y: -100,
      opacity: 0,
    });
  }, []);

  return (
    <Header>
      <Hamburger className="hamburger" />
      <Logo href="/" className="logo">
        <span>Ana & Bia</span>
        <span>doces</span>
      </Logo>
      <Button className="rounded" color="p6" text="Faça seu pedido!" />
    </Header>
  );
}

export default Nav;
