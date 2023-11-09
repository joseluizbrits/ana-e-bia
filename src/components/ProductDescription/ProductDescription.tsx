import React from "react";
import { ProductDescriptionStyled } from "./ProductDescriptionStyled";

import cookieDesc from "../../assets/img/cookie-desc-1.jpg";

type DescProps = {
  desc: {
    id: string;
    item: string;
    text: string;
    subItem: string;
    subText: string;
    img: string;
  }[];
};

function ProductDescription({ desc }: DescProps) {
  return (
    <ProductDescriptionStyled>
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
