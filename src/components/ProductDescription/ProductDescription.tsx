import { ProductDescriptionStyled } from "./ProductDescriptionStyled";

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
  return (
    <ProductDescriptionStyled>
      <h2>{name}</h2>

      <div className="card">
        <div className="wrapp">
          {desc.map(({ id, item, text, subItem, subText, img }) => (
            <div key={id} className="item">
              <h3>{item}</h3>
              <span>{text}</span>

              <div className="sub-item">
                <img src={img} alt="" />

                <div className="text-wrapp">
                  <h4>{subItem}</h4>
                  <p>{subText}</p>

                  <button>Fazer pedido</button>
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
