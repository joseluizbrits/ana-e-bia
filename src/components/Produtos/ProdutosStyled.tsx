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

  .title::before {
    content: "hmmmmm!";
    display: block;
    position: absolute;
    bottom: 80px;
    right: 80px;
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

  .image {
    transform: translateY(-120px);

    img {
      width: 600px;
      height: 600px;
      border-radius: 50px;
      object-fit: cover;

      position: relative;
      z-index: 1;

      &#img-cookie {
        object-position: 0 -200px;
      }

      &#img-cake {
        object-position: 0 -56px;
      }

      &#img-macaron {
        object-position: 0 -220px;
      }
    }

    .shadow {
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

    button.rounded {
      margin-top: 40px;
      align-self: flex-end;
    }
  }

  .candy:nth-child(even) {
    flex-direction: row-reverse;
    margin-bottom: 80px;

    .title {
      padding-top: 80px;
    }

    .image {
      transform: translateY(0);
    }

    .shadow {
      top: -80px;
      left: -80px;
      background: var(--p4);
    }

    button.rounded {
      align-self: flex-start;
    }
  }
`;
