import React from "react";
import { useLocation } from "react-router-dom";
import { SweetsStyled } from "./SweetsStyled";
import { products } from "../../utils/products";
import useMedia from "../../hooks/useMedia";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function Sweets() {
  const desktop = useMedia("(max-width: 1400px)");
  const mobile = useMedia("(max-width: 900px)");
  const URL = useLocation();

  const sweets = products.filter(
    (sweet) => sweet.type !== URL.pathname.replace("/", "")
  );

  return (
    <SweetsStyled>
      <div className="wrapp">
        <h2>Veja os nossos doces</h2>
        <Swiper
          slidesPerView={desktop ? (mobile ? 1 : 2) : 3}
          spaceBetween={40}
          navigation={desktop || mobile || sweets.length > 3 ? true : false}
          modules={[Navigation]}
          className={mobile ? "mobile" : ""}
        >
          {sweets.map(({ name, type, descShort, img, alt }) => (
            <SwiperSlide key={name}>
              <div className="content">
                <img src={img} alt={alt} className={type} />
                <div className="text">
                  <h3>{name}</h3>
                  <p>{descShort}</p>
                </div>
              </div>
              <div className="shadow"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SweetsStyled>
  );
}

export default Sweets;
