import styled from "styled-components";

export const SweetsStyled = styled.div`
  background: var(--p5);

  .wrapp {
    margin: 0 11%;
    border-radius: 50px;
    border: 1px solid var(--p6);
  }

  .wrapp h2 {
    font-family: var(--title);
    font-weight: var(--bold);
    font-size: clamp(2rem, 6vw, 6rem);
    letter-spacing: 0.05rem;
    text-align: center;
    color: var(--p6);
    padding-top: 6%;
    padding-bottom: 8%;
  }

  .swiper {
    margin: 0 6%;
    overflow-x: hidden;
  }

  .swiper-wrapper {
    display: flex;
    width: max-content;
  }

  .swiper-slide {
    background: var(--p7);
    border-radius: 50px;
    cursor: pointer;
  }

  .swiper-slide img {
    aspect-ratio: 1/1;
    width: 100%;
    border-radius: 50px 50px 0 0;
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

  .swiper-slide .text {
    padding: 24px 0 24px 48px;
    display: flex;
    flex-direction: column;

    h3 {
      font-family: var(--title);
      font-weight: var(--semibold);
      font-size: clamp(1.25rem, 2vw, 3rem);
      text-transform: uppercase;
      color: var(--p5);
    }

    p {
      font-family: var(--text);
      font-size: clamp(0.75rem, 1vw, 1.5rem);
      line-height: 1.5em;
      color: #fff;
      max-width: 20ch;
    }
  }
`;
