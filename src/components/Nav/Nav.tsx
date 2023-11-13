import React from "react";
import { Link } from "react-router-dom";
import { Header, Hamburger } from "./NavStyled";
import Button from "../Button/Button";
import Menu from "../Menu/Menu";

function Nav() {
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

      <Menu className={menuActive ? "active" : ""} />

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
