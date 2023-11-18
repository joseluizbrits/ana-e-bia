import { TeachingStyled } from "./TeachingStyled";
import { TeachingAnimation } from "./TeachingAnimation";
import { wayTeaching } from "../../utils/wayTeaching";

function Teaching() {
  TeachingAnimation();

  return (
    <TeachingStyled className="section-teaching">
      <h2>Compartilhando conhecimento e paixão pela culinária doce</h2>

      <div className="card">
        <div className="logo-container">
          <div className="logo">
            <span>Ana & Bia</span>
            <span>escola de doces</span>
          </div>
        </div>

        <div className="sub-card-container">
          {wayTeaching.map(({ type, title, desc, icon }) => (
            <div key={type} className="sub-card">
              <div className="title">
                <h3>{title}</h3>
                {icon}
              </div>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </TeachingStyled>
  );
}

export default Teaching;
