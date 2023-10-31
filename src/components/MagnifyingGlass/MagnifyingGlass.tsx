import { MagnifyingGlassStyled } from "./MagnifyingGlassStyled";
import { services } from "../../utils/services";

function MagnifyingGlass() {
  const servicesWithImage = services.filter((service) => service.img);

  return (
    <>
      {servicesWithImage?.map(({ type, title, desc, tags, img }, index) => (
        <MagnifyingGlassStyled key={type}>
          <div className={`title title-${index + 1}`}>
            <h2>{title}</h2>
          </div>

          <div className={`card card-${index + 1}`}>
            <div className={`sub-card sub-card-${index + 1}`}>
              <div className={`description description-${index + 1}`}>
                <p>{desc}</p>

                <div className={`tags tags-${index + 1}`}>
                  {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`image image-${index + 1}`}>
            <img src={img} alt="Mesa decorada com muitas flores e de doces" />
          </div>
        </MagnifyingGlassStyled>
      ))}
    </>
  );
}

export default MagnifyingGlass;
