import styled from "styled-components";

export const Section = styled.section`
  .title {
    height: 570px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;

    position: relative;

    h2 {
      font-family: var(--title);
      font-size: 6rem;
      letter-spacing: 0.05rem;
      color: var(--p6);
    }

    p {
      font-family: var(--text);
      font-size: 1.5rem;
      line-height: 2rem;
      text-align: center;
      max-width: 68ch;
      color: var(--p3);
    }
  }

  .title::after {
    content: "hmmmmm!";
    display: block;
    position: absolute;
    bottom: 40px;
    right: 40px;
    font-family: var(--text);
    color: var(--p1);
  }

  .products {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 200px;
    padding: 0 120px;

    background: linear-gradient(to bottom, var(--p1) 41%, #fff 41%);
  }

  .candy {
    display: flex;
    gap: 200px;
  }

  .candy .image {
    transform: translateY(-120px);

    img {
      width: 600px;
      height: 600px;
      border-radius: 50px;
      object-fit: cover;

      position: relative;
      z-index: 1;

      &#cookie {
        object-position: 0 -200px;
      }

      &#cake {
        object-position: 0 -56px;
      }

      &#macaron {
        object-position: 0 -220px;
      }
    }

    &::after {
      content: "";
      width: 450px;
      height: 450px;
      border-radius: 50px;
      background: var(--p2);

      position: absolute;
      bottom: -80px;
      right: -80px;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    padding-top: 80px;

    h3 {
      font-family: var(--title);
      font-weight: var(--bold);
      font-size: 3rem;
      letter-spacing: 0.05rem;
      text-transform: uppercase;
      color: var(--p6);
    }

    p {
      font-family: var(--text);
      font-size: 1.5rem;
      color: var(--p4);
      max-width: 25ch;
      margin-top: 20px;
    }

    a.rounded {
      margin-top: 40px;
      align-self: flex-end;
    }
  }

  .candy:nth-child(even) {
    flex-direction: row-reverse;
    margin-bottom: 80px;

    .text {
      padding-top: 20px;
    }

    .image {
      transform: translateY(0);
    }

    .image::after {
      top: -80px;
      left: -80px;
      background: var(--p4);
    }

    a.rounded {
      align-self: flex-start;
    }
  }

  @media screen and (max-width: 1400px) {
    .title {
      height: 480px;

      h2 {
        font-size: 4rem;
      }

      p {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }

    .products {
      gap: 160px;
      background: linear-gradient(to bottom, var(--p1) 40%, #fff 40%);
    }

    .candy {
      gap: 120px;
    }

    .candy .image {
      transform: translateY(-64px);

      img {
        width: 400px;
        height: 400px;

        &#cookie {
          object-position: 0 -140px;
        }

        &#macaron {
          object-position: 0 -160px;
        }
      }
    }

    .candy .image::after {
      width: 250px;
      height: 250px;
      bottom: -48px;
      right: -48px;
    }

    .candy:nth-child(even) .image::after {
      top: -48px;
      left: -48px;
    }

    .text h3 {
      font-size: 2rem;
    }

    .text p {
      font-size: 1rem;
      margin-top: 12px;
    }

    .text button.rounded {
      font-size: 1rem;
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 1000px) {
    .title {
      height: 216px;
      padding-top: 64px;

      h2 {
        font-size: 2rem;
        max-width: 12ch;
        text-align: center;
      }

      p {
        display: none;
      }

      &::after {
        font-size: 0.5rem;
        bottom: 20px;
        right: 20px;
      }
    }

    .products {
      gap: 80px;
      padding: 0 80px;
      background: linear-gradient(to bottom, var(--p1) 51%, #fff 51%);
    }

    .candy {
      gap: 48px;
    }

    .candy .image {
      transform: translateY(40px);

      img {
        width: 250px;
        height: 250px;

        &#cookie {
          object-position: 0 -85px;
        }

        &#cake {
          object-position: 0 -20px;
        }

        &#macaron {
          object-position: 0 -100px;
        }
      }
    }

    .candy .image::after {
      display: none;
    }

    .candy:nth-child(even) {
      margin-bottom: 0;
    }

    .text h3 {
      font-size: 1.5rem;
    }

    .text p {
      font-size: 1rem;
      margin-top: 8px;
    }

    .text button.rounded {
      font-size: 0.75rem;
      margin-top: 16px;
    }

    .candy:nth-child(even) .text {
      padding-top: 40px;
    }
  }

  @media screen and (max-width: 700px) {
    .products {
      background: linear-gradient(to bottom, var(--p1) 50.5%, #fff 50.5%);
    }

    .text {
      padding-top: 64px;
      align-items: center;
    }

    .text p {
      text-align: center;
    }

    .text a.rounded {
      font-weight: var(--semibold);
      font-size: 1rem;
      text-align: center;
      width: 100%;
      margin-top: 32px;
    }

    .candy,
    .candy:nth-child(even) {
      flex-direction: column;
      gap: 0;
    }

    .candy:nth-child(even) .image {
      transform: translateY(14px);
    }
  }
`;
