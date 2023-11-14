import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuStyled } from "./MenuStyled";
import { navigation } from "../../utils/navigation";
import { products } from "../../utils/products";

function Menu({ className }: { className: string }) {
  const pageName = useLocation().pathname;

  const nav = navigation.filter(({ route }) => route !== pageName);
  const sweets = products.filter(
    ({ type }) => type !== pageName.replace("/", "")
  );

  return (
    <MenuStyled className={className}>
      <ul>
        {nav.map(({ route, page, img, alt }, index) => (
          <li key={page} className={`route-${index + 1}`}>
            <div className="link">
              <Link to={route}>{page}</Link>
            </div>

            <aside>
              <img src={img} alt={alt} />
            </aside>
          </li>
        ))}
      </ul>

      <ul className="sweets-routes">
        {sweets.map(({ type }) => (
          <li key={type}>
            <a href={`/${type}`}>{type}</a>
          </li>
        ))}
      </ul>
    </MenuStyled>
  );
}

export default Menu;
