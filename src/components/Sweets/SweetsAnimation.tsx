import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SweetsAnimation = () => {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from("#sweets h2", {
        scrollTrigger: {
          trigger: "#sweets",
          start: "top 80%",
          end: "bottom center",
        },
        x: 200,
        opacity: 0,
        ease: "power3.out",
        duration: 1,
      });

      gsap.from("#sweets .swiper-slide", {
        scrollTrigger: {
          trigger: "#sweets .swiper-slide",
          start: "top 80%",
          end: "bottom center",
        },
        x: -100,
        opacity: 0,
        stagger: 0.1,
        ease: "elastic(1, .8)",
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);
};
