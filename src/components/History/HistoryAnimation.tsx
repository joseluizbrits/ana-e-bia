import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const HistoryAnimation = () => {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".section-history", {
        scrollTrigger: {
          trigger: ".section-history .title",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
        "--circleTop": -400,
        "--circleLeft": -400,
      });

      gsap.from(".section-history .title", {
        scrollTrigger: {
          trigger: ".section-history .title",
          start: "top 80%",
          end: "center center",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
      });

      gsap.from(".card-sisters", {
        scrollTrigger: {
          trigger: ".section-history .title",
          start: "top 80%",
          end: "80% center",
          scrub: 1,
        },
        "--circleSisTop": 0,
        "--circleSisRight": -400,
      });

      gsap.from(".card-sisters .wrapp > *", {
        scrollTrigger: {
          trigger: ".card-sisters",
          start: "top center",
          end: "center center",
        },
        x: -200,
        opacity: 0,
        ease: "power3.out",
        duration: 1,
      });

      gsap.from(".card-grandmother .wrapp > *", {
        scrollTrigger: {
          trigger: ".card-grandmother",
          start: "top center",
          end: "center center",
        },
        x: 200,
        opacity: 0,
        ease: "power3.out",
        duration: 1,
      });

      gsap.from(".card-grandmother", {
        scrollTrigger: {
          trigger: ".card-grandmother",
          start: "40% 70%",
          end: "70% center",
          scrub: 1,
        },
        "--circleGrandmaTop": -400,
        "--circleGrandmaLeft": -400,
      });
    });

    return () => ctx.revert();
  }, []);
};
