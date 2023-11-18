import { ProductDescriptionStyled } from "./ProductDescriptionStyled";
import { ProductDescriptionAnimation } from "./ProductDescriptionAnimation";

type DescProps = {
  name: string;
  desc: {
    id: string;
    item: string;
    text: string;
    subItem: string;
    subText: string;
    img: string;
  }[];
};

function ProductDescription({ desc, name }: DescProps) {
  ProductDescriptionAnimation();

  return (
    <ProductDescriptionStyled className="product-description">
      <div className="title">
        <h2>{name}</h2>
      </div>

      <div className="card">
        <div className="wrapp">
          {desc.map(({ id, item, text, subItem, subText, img }) => (
            <div key={id} className="item">
              <h3>{item}</h3>
              <div className="desc-wrapp">
                <span>{text}</span>
              </div>

              <div className="sub-item">
                <img src={img} alt="" />

                <div className="text-wrapp">
                  <h4>{subItem}</h4>
                  <p>{subText}</p>

                  <a href="#contact">Fazer pedido</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProductDescriptionStyled>
  );
}

export default ProductDescription;
