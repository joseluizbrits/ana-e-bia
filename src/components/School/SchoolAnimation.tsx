import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SchoolAnimation = () => {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".section-school", {
        scrollTrigger: {
          trigger: ".section-school",
          start: "top 80%",
          end: "bottom center",
        },
        "--circleScale": 0,
        "--circlePosition": "translate(500px, -500px)",
        ease: "power3.out",
        duration: 3,
        delay: 0.5,
      });

      gsap.from(".section-school .description", {
        scrollTrigger: {
          trigger: ".section-school",
          start: "+=20% 80%",
          end: "bottom center",
        },
        opacity: 0,
        x: -600,
        ease: "power3.out",
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);
};
