import React from "react";
import { TranslucentCardStyled } from "./TranslucentCardStyled";
import { services } from "../../utils/services";

function TranslucentCard() {
  const servicesWithoutImage = services.filter((service) => !service.img);

  return (
    <TranslucentCardStyled>
      {servicesWithoutImage.map(({ type, title, desc, tags }) => (
        <div key={type} className="card">
          <h2>{title}</h2>

          <div className="description">
            <p>{desc}</p>

            <div className="tags">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </TranslucentCardStyled>
  );
}

export default TranslucentCard;
