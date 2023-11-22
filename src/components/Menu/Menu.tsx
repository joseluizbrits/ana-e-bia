import { Link, useLocation } from "react-router-dom";
import { MenuStyled } from "./MenuStyled";
import { MenuAnimation } from "./MenuAnimation";
import { navigation } from "../../utils/navigation";
import { products } from "../../utils/products";

function Menu({ className, id }: { className: string; id: string }) {
  MenuAnimation(className);

  const pageName = useLocation().pathname;

  const nav = navigation.filter(({ route }) => route !== pageName);
  const sweets = products.filter(
    ({ type }) => type !== pageName.replace("/", "")
  );

  return (
    <MenuStyled className={className} id={id}>
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
            <Link to={`/${type}`} target="_top">
              {type}
            </Link>
          </li>
        ))}
      </ul>
    </MenuStyled>
  );
}

export default Menu;
