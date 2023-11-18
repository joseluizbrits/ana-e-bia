import React from "react";
import { Link } from "react-router-dom";
import { Header, Hamburger } from "./NavStyled";
import Button from "../Button/Button";
import Menu from "../Menu/Menu";

import gsap from "gsap";

function Nav() {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("header", {
        opacity: 0,
        scale: 0.5,
        ease: "power3.out",
        duration: 1.5,
      });
    });
    return () => ctx.revert();
  }, []);

  const [menuActive, setMenuActive] = React.useState(false);

  React.useEffect(() => {
    if (menuActive) {
      document.documentElement.style.overflow = "hidden";
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      document.documentElement.style.overflowY = "auto";
      document.documentElement.style.overflowX = "hidden";
    }
  }, [menuActive]);

  return (
    <Header>
      <Hamburger
        className={`hamburger ${menuActive ? "active" : ""}`}
        onClick={() => setMenuActive(!menuActive)}
      />

      <Menu className={menuActive ? "active" : ""} id="menu" />

      <Link to="/" className="logo">
        <span>Ana & Bia</span>
        <span>doces</span>
      </Link>

      <Button
        href="#contact"
        className="rounded"
        color="gradient"
        text="Faça seu pedido!"
      />
    </Header>
  );
}

export default Nav;
