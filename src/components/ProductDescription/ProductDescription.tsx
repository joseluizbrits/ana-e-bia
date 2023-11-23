import React from "react";
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

  const [contactPosition, setContactPosition] = React.useState(0);

  React.useEffect(() => {
    const contact =
      document.querySelector("#contact") || document.querySelector("#register");

    if (contact) setContactPosition(contact.getBoundingClientRect().top);
  }, []);

  function handleClick() {
    window.scroll({
      top: contactPosition,
      left: 0,
      behavior: "smooth",
    });
  }

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

                  <button onClick={handleClick}>Fazer pedido</button>
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
