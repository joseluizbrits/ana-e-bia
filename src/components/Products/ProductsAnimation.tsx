import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ProductsProps = {
  name: string;
  type: string;
  desc: string;
  descShort: string;
  img: string;
  alt: string;
}[];

export const ProductsAnimation = (products: ProductsProps) => {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".section-products .title", {
        scrollTrigger: {
          trigger: ".section-products .title",
          start: "top 80%",
          end: "bottom center",
        },
        opacity: 0,
        x: -600,
      });

      products.forEach(({ type }) => {
        gsap.from(`.candy.${type} .image`, {
          scrollTrigger: {
            trigger: `.candy.${type}`,
            start: "-=80px 80%",
            end: "bottom center",
          },
          scale: 0.5,
          ease: "power3.out",
          duration: 1,
        });
      });

      products.forEach(({ type }) => {
        gsap.from(`.candy.${type} .text`, {
          scrollTrigger: {
            trigger: `.candy.${type}`,
            start: "-=80px 60%",
            end: "bottom center",
          },
          opacity: 0,
          y: -100,
          ease: "power3.out",
          duration: 1,
        });
      });
    });

    return () => ctx.revert();
  });
};
