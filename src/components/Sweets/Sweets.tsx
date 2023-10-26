import React from "react";
import { SweetsStyled } from "./SweetsStyled";
import { products } from "../../utils/products";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useLocation } from "react-router-dom";

function Sweets() {
  const URL = useLocation();

  const sweets = products.filter(
    (sweet) => sweet.type !== URL.pathname.replace("/", "")
  );

  return (
    <SweetsStyled>
      <div className="wrapp">
        <h2>Veja os nossos doces</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination]}
        >
          {sweets.map(({ name, type, descShort, img, alt }) => (
            <SwiperSlide key={name}>
              <img src={img} alt={alt} className={type} />
              <div className="text">
                <h3>{name}</h3>
                <p>{descShort}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SweetsStyled>
  );
}

export default Sweets;
