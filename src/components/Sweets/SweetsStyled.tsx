import styled from "styled-components";
import arrow from "../../assets/svg/arrowCircle.svg";

export const SweetsStyled = styled.div`
  overflow: hidden;

  .wrapp {
    margin: 0 11%;
  }

  .wrapp h2 {
    font-family: var(--title);
    font-weight: var(--bold);
    font-size: clamp(1.75rem, 5vw, 6rem);
    letter-spacing: 0.05rem;
    text-align: center;
    color: var(--p6);
    padding: 4% 6% 6% 6%;
  }

  .swiper {
    margin: 0 6% 6% 6%;
    overflow-x: hidden;
    position: relative;

    &.mobile,
    &:hover {
      .swiper-button-prev,
      .swiper-button-next {
        opacity: 1;
      }
    }
  }

  .swiper-wrapper {
    display: flex;
    width: max-content;
  }

  .swiper-slide {
    cursor: pointer;
    display: grid;
  }

  .swiper-slide .content {
    width: 95%;
    height: 94%;
    margin-left: 4%;
    border-radius: 50px;
    background: var(--p7);
    box-shadow: -1px 1px 3px 0px rgba(0, 0, 0, 0.2);
    overflow: hidden;

    grid-area: 1/1;
    justify-self: center;
    z-index: 1;

    &:hover {
      img {
        scale: 1.1;
        filter: brightness(90%);
      }

      .text h3,
      .text p {
        scale: 1.05;
      }
    }
  }

  .swiper-slide .content img {
    aspect-ratio: 1/1;
    width: 100%;
    border-radius: 50px 50px 0 0;
    transition: 0.3s;

    object-fit: cover;

    &.cookie {
      object-position: 0 63%;
    }

    &.cake {
      object-position: 0 10%;
    }

    &.macaron {
      object-position: 0 75%;
    }
  }

  .swiper-slide .content .text {
    padding: 20px 40px 64px 40px;
    background: var(--p7);
    position: relative;

    display: flex;
    flex-direction: column;

    h3 {
      font-family: var(--title);
      font-weight: var(--semibold);
      font-size: clamp(1.25rem, 2vw, 3rem);
      text-transform: uppercase;
      color: var(--p5);
      transition: 0.3s;
    }

    p {
      font-family: var(--text);
      font-size: clamp(0.75rem, 1vw, 1.5rem);
      line-height: 1.5em;
      color: #fff;
      margin-top: 8px;
      transition: 0.3s;
    }
  }

  .swiper-slide .shadow {
    width: 97%;
    height: 95%;
    margin-top: 2%;
    border-radius: 50px;
    background: var(--p8);

    grid-area: 1/1;
    justify-self: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: clamp(40px, 5vw, 100px);
    height: clamp(40px, 5vw, 100px);
    background: url(${arrow}) center center;
    background-size: cover;
    cursor: pointer;

    position: absolute;
    top: 50%;
    z-index: 1;

    opacity: 0;
    transition: 0.3s;
  }

  .swiper-button-prev {
    left: 0;
    transform: translateY(-50px) rotate(180deg);

    &:hover {
      transform: translateY(-50px) rotate(180deg) scale(0.9);
    }

    &.swiper-button-disabled {
      transform: translateY(-50px) rotate(180deg) scale(1);
      filter: brightness(0.6);
      cursor: initial;
    }
  }

  .swiper-button-next {
    right: 0;
    transform: translateY(-50px);

    &:hover {
      transform: translateY(-50px) scale(0.9);
    }

    &.swiper-button-disabled {
      transform: translateY(-50px) scale(1);
      filter: brightness(0.6);
      cursor: initial;
    }
  }

  /* ---------------- PAGE ABOUT ---------------- */

  &.sweets-about {
    background: var(--p5);

    .wrapp {
      border-radius: 50px;
      border: 1px solid var(--p6);
    }
  }

  /* ---------------- RESPONSIVE ---------------- */

  @media screen and (max-width: 1400px) {
    .swiper-slide .content .text h3 {
      font-size: clamp(1.25rem, 3vw, 3rem);
    }

    .swiper-slide .content p {
      font-size: clamp(0.75rem, 1.5vw, 1.5rem);
    }
  }

  @media screen and (max-width: 900px) {
    .wrapp {
      margin: 0 7%;
    }

    .swiper-slide .content,
    .swiper-slide .shadow {
      width: 50%;
      height: 97%;

      .text {
        padding: 20px 40px 40px 40px;
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      width: 60px;
      height: 60px;
    }
  }

  @media screen and (max-width: 600px) {
    .wrapp h2 {
      padding: 8%;
    }

    .swiper-slide .content,
    .swiper-slide .shadow {
      width: 80%;
      height: 97%;
    }

    .swiper-slide .content:hover {
      img,
      .text h3,
      .text p {
        scale: initial;
      }
    }
  }
`;
