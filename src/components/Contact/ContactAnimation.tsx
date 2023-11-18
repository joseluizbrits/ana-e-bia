import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ContactAnimation = () => {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#contact",
            start: "-=100px 80%",
            end: "bottom center",
          },
        })
        .from("#contact svg", {
          x: -200,
          scale: 0,
          rotate: "360deg",
          ease: "power3.out",
          duration: 1,
        })
        .from(
          "#contact form",
          {
            y: 100,
            opacity: 0,
            "--circleScale": 0,
            ease: "power3.out",
            duration: 1,
          },
          "-=0.5"
        );
    });

    return () => ctx.revert();
  }, []);
};
