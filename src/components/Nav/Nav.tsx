import React from "react";
import { Header, Hamburger, Logo } from "./NavStyled";
import Button from "../Button/Button";
import Menu from "../Menu/Menu";

function Nav() {
  const [menuActive, setMenuActive] = React.useState(false);

  return (
    <Header>
      <Hamburger
        className={`hamburger ${menuActive ? "active" : ""}`}
        onClick={() => setMenuActive(!menuActive)}
      />
      <Menu className={menuActive ? "active" : ""} />
      <Logo href="/" className="logo">
        <span>Ana & Bia</span>
        <span>doces</span>
      </Logo>
      <Button className="rounded" color="p6" text="Faça seu pedido!" />
    </Header>
  );
}

export default Nav;
