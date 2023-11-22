import { Link } from "react-router-dom";
import { ProductsStyled } from "./ProductsStyled";
import { ProductsAnimation } from "./ProductsAnimation";
import Button from "../Button/Button";
import { products } from "../../utils/products";

function Produtos() {
  ProductsAnimation(products);

  return (
    <ProductsStyled className="section-products">
      <div className="title">
        <h2>Sabor feito com carinho</h2>

        <p>
          Nossos produtos são pequenas obras-primas de confeitaria, de cupcakes
          decorados a bolos elaborados. Cada mordida é uma experiência de
          sabores únicos e texturas perfeitas
        </p>
      </div>

      <div className="products">
        {products.map(({ name, type, desc, img, alt }) => (
          <Link key={name} to={`/${type}`} className={`candy ${type}`}>
            <div className="image">
              <img src={img} alt={alt} id={type} />
            </div>

            <div className="text">
              <h3>{name}</h3>

              <p>{desc}</p>

              <Button className="rounded" color="gradient" text="Eu quero!" />
            </div>
          </Link>
        ))}
      </div>
    </ProductsStyled>
  );
}

export default Produtos;
