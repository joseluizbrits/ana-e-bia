import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ProductDescriptionAnimation = () => {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".product-description .title h2", {
        scrollTrigger: {
          trigger: ".product-description .title",
          start: "top 80%",
          end: "150% 80%",
          scrub: 3,
        },
        x: "60%",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".product-description .card",
            start: "-=600px 80%",
            end: "bottom center",
          },
        })
        .from(".product-description .card", {
          y: 600,
          ease: "elastic.out(1, .8)",
          duration: 1,
        })
        .to(
          ".product-description .card .item",
          {
            pointerEvents: "none",
          },
          "<+0.2"
        )
        .from(
          ".product-description .card h3",
          {
            x: -40,
            opacity: 0,
            stagger: 0.2,
            ease: "power3.out",
            duration: 1,
          },
          "<"
        )
        .from(
          ".product-description .card .desc-wrapp",
          {
            x: -40,
            opacity: 0,
            stagger: 0.2,
            ease: "power3.out",
            duration: 1,
          },
          "<+0.3"
        )
        .fromTo(
          ".product-description .card .wrapp > div + div",
          {
            borderTop: "1px solid transparent",
          },
          {
            borderTop: "1px solid var(--p8)",
            stagger: 0.2,
            ease: "power3.out",
            duration: 1,
          },
          "<-0.8"
        )
        .to(
          ".product-description .card .item",
          {
            pointerEvents: "all",
          },
          ">-0.1"
        );
    });

    return () => ctx.revert();
  }, []);
};
