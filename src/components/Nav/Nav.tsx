import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Header, Hamburger } from "./NavStyled";
import Button from "../Button/Button";
import Menu from "../Menu/Menu";

function Nav() {
  const URL = useLocation().pathname.replace("/", "");
  const [menuActive, setMenuActive] = React.useState(false);
  const [contactPosition, setContactPosition] = React.useState(0);

  React.useEffect(() => {
    const contact =
      document.querySelector("#contact") || document.querySelector("#register");

    if (contact) setContactPosition(contact.getBoundingClientRect().top);
  }, []);

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

  function scrollToContact() {
    window.scroll({
      top: contactPosition,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <Header>
      <Hamburger
        className={`hamburger ${menuActive && "active"}`}
        onClick={() => setMenuActive(!menuActive)}
      />

      <Menu
        className={`menu ${menuActive && "active"}`}
        setMenuActive={setMenuActive}
      />

      <Link to="/" className={URL === "escola" ? "logo logo-school" : "logo"}>
        <span>Ana & Bia</span>
        <span>doces</span>
      </Link>

      <Button
        onClick={scrollToContact}
        className="rounded"
        color="gradient"
        text={URL === "escola" ? "Inscreva-se!" : "Faça seu pedido!"}
      />
    </Header>
  );
}

export default Nav;
