import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MenuStyled } from "./MenuStyled";
import { MenuAnimation } from "./MenuAnimation";
import { navigation } from "../../utils/navigation";
import { products } from "../../utils/products";

type MenuProps = {
  className: string;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
};

function Menu({ className, setMenuActive }: MenuProps) {
  MenuAnimation(className);

  const navigate = useNavigate();
  const pageName = useLocation().pathname;

  const nav = navigation.filter(({ route }) => route !== pageName);
  const sweets = products.filter(
    ({ type }) => type !== pageName.replace("/", "")
  );

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    setMenuActive(false);

    const routeName = e.currentTarget.className.split("-")[0];
    navigate("/" + routeName);
  }

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
            <a onClick={handleClick} className={`${type}-route`}>
              {type}
            </a>
          </li>
        ))}
      </ul>
    </MenuStyled>
  );
}

export default Menu;
