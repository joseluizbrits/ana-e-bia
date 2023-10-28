import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Nav = styled.nav`
  display: none;

  &.active {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: var(--p5);
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: center;

    li a {
      color: #fff;
      font-family: var(--title);
      font-weight: var(--bold);
      font-size: 7rem;
      letter-spacing: 0.05rem;
    }
  }
`;

function Menu({ className }: { className: string }) {
  return (
    <Nav className={className}>
      <ul>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <a href="/serviços">Serviços</a>
        </li>
        <li>
          <a href="/escola">Escola</a>
        </li>
      </ul>
    </Nav>
  );
}

export default Menu;
