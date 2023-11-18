import { TranslucentCardStyled } from "./TranslucentCardStyled";
import { TranslucentCardAnimation } from "./TranslucentCardAnimation";
import { services } from "../../utils/services";

function TranslucentCard() {
  TranslucentCardAnimation();

  const servicesWithoutImage = services.filter((service) => !service.img);

  return (
    <TranslucentCardStyled className="translucent-cards">
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
