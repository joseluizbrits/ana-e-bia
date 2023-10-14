import styled from "styled-components";
import img from "../../assets/img-intro.jpg";

export const Background = styled.section`
  background: url(${img}) center center;
  background-size: cover;
  width: 100vw;
  height: 100vh;

  /* transform: translateY(-80px); */

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1500px) {
    div.one {
      font-size: 2.5rem;
      line-height: 3.25rem;
    }

    div.two {
      font-size: 1.5rem;
      line-height: 2.25rem;
    }

    span.c-two {
      top: -10px;
    }
  }

  @media (max-width: 1000px) {
    h1.title {
      padding: 0 40px;
    }
  }

  @media (max-width: 700px) {
    h1.title {
      transform: translateY(-60px);
    }

    div.two {
      display: none;
    }

    span.c-one {
      width: 100px;
      height: 100px;
      top: 20px;
      left: 140px;
    }
  }
`;

export const Title = styled.h1`
  width: 100%;
  height: 300px;
  padding: 0 160px;

  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  font-family: var(--title);
  font-weight: var(--bold);
  letter-spacing: 0.05rem;

  &.one {
    font-size: 4rem;
    max-width: 13ch;
    color: #fff;
    position: relative;
  }

  &.two {
    align-self: center;
    font-size: 2.5rem;
    max-width: 19ch;
    color: #fff;
    position: relative;
  }

  span.text {
    z-index: 1;
    position: relative;
  }
`;

export const Circle = styled.span`
  content: "";
  display: block;
  border-radius: 50%;
  background: var(--p4);
  position: absolute;

  &.c-one {
    width: 150px;
    height: 150px;
    top: -30px;
    left: 100px;
  }

  &.c-two {
    width: 100px;
    height: 100px;
    top: 30px;
    right: 80px;
  }
`;
