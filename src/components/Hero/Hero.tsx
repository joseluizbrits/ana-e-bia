import { HeroStyled } from "./HeroStyled";
import { HeroAnimation } from "./HeroAnimation";
import ArrowCircleDown from "../../assets/svg/ArrowCircleDown";
import { services } from "../../utils/services";

type HeroProps = {
  img: string;
  text?: string[];
  page?: "services" | "school";
  circleColor: string;
};

function Hero({ img, text, page, circleColor }: HeroProps) {
  const nav = services.filter(({ nav }) => nav);

  HeroAnimation(text, page);

  return (
    <HeroStyled
      className="hero"
      style={{
        background: `url(${img}) center center / cover`,
      }}
      $circleColor={circleColor}
    >
      <h1>
        {text?.map((t, i) => (
          <div key={t} className={`text-${i + 1}`}>
            <p>{t}</p>
          </div>
        ))}

        {page && (
          <div className={`title-${page}`}>
            {page === "services" ? (
              <span>Nossos servicos</span>
            ) : (
              <span>Escola de confeitaria</span>
            )}
            <ArrowCircleDown />
          </div>
        )}
      </h1>

      {page === "services" && (
        <nav className="nav-services">
          <ul>
            {nav.map(
              ({ id, type }, index) => index < 3 && <li key={id}>{type}</li>
            )}
          </ul>
        </nav>
      )}
    </HeroStyled>
  );
}

export default Hero;
