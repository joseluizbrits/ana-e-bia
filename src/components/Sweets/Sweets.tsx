import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SweetsStyled } from "./SweetsStyled";
import { SweetsAnimation } from "./SweetsAnimation";
import { products } from "../../utils/products";
import useMedia from "../../hooks/useMedia";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function Sweets() {
  SweetsAnimation();

  const desktop = useMedia("(max-width: 1400px)");
  const mobile = useMedia("(max-width: 900px)");
  const pageName = useLocation().pathname.replace("/", "");

  const sweets = products.filter((sweet) => sweet.type !== pageName);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageName]);

  return (
    <SweetsStyled
      id="sweets"
      className={pageName === "sobre" ? "sweets-about" : ""}
    >
      <div className="wrapp">
        {pageName === "sobre" ? (
          <h2>Veja os nossos doces</h2>
        ) : (
          <h2>Veja também</h2>
        )}

        <Swiper
          slidesPerView={desktop ? (mobile ? 1 : 2) : 3}
          spaceBetween={40}
          navigation={desktop || mobile || sweets.length > 3 ? true : false}
          modules={[Navigation]}
          className={mobile ? "mobile" : ""}
        >
          {sweets.map(({ name, type, descShort, img, alt }) => (
            <SwiperSlide key={name}>
              <Link to={`/ana-e-bia/${type}`} className="content">
                <img src={img} alt={alt} className={type} />

                <div className="text">
                  <h3>{name}</h3>
                  <p>{descShort}</p>
                </div>
              </Link>

              <div className="shadow"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SweetsStyled>
  );
}

export default Sweets;
