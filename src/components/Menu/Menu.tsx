import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuStyled } from "./MenuStyled";
import { navigation } from "../../utils/navigation";
import { products } from "../../utils/products";

import gsap from "gsap";

function Menu({ className }: { className: string }) {
  const pageName = useLocation().pathname;

  const nav = navigation.filter(({ route }) => route !== pageName);
  const sweets = products.filter(
    ({ type }) => type !== pageName.replace("/", "")
  );

  React.useLayoutEffect(() => {
    const tl = gsap.timeline({ paused: true, reversed: true });

    if (className) tl.play();

    tl.fromTo(
      "nav",
      {
        width: 0,
      },
      {
        width: "100%",
        ease: "power2.inOut",
        duration: 1,
      }
    );

    tl.fromTo(
      "nav ul li",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power1",
        stagger: 0.1,
      }
    );
  }, [className]);

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
