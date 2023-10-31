import { HeroStyled } from "./HeroStyled";

import ArrowCircleDown from "../../assets/svg/ArrowCircleDown";

import { services } from "../../utils/services";

type HeroProps = {
  img: string;
  text?: string[];
  page?: "services" | "school";
  circleColor?:
    | "rgba(255, 100, 136, 0.5)"
    | "rgba(255, 100, 136, 0.8)"
    | "rgba(255, 150, 174, 0.5)"
    | "rgb(255, 150, 174)";
};

function Hero({ img, text, page, circleColor }: HeroProps) {
  const nav = services.filter(({ nav }) => nav);

  return (
    <HeroStyled
      style={{
        background: `url(${img}) center center`,
        backgroundSize: "cover",
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
              ({ type }, index) => index < 3 && <li key={type}>{type}</li>
            )}
          </ul>
        </nav>
      )}
    </HeroStyled>
  );
}

export default Hero;
