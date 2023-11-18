import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ValuesAnimation = () => {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-values",
            start: "top center",
            end: "bottom center",
          },
        })
        .from(".section-values .card", {
          opacity: 0,
          ease: "power3.out",
        })
        .from(
          ".section-values .card p",
          {
            x: -100,
            opacity: 0,
          },
          "-=0.5"
        )
        .from(
          ".section-values .card li",
          {
            y: -100,
            opacity: 0,
            stagger: 0.1,
          },
          "-=0.5"
        )
        .fromTo(
          ".section-values .card hr",
          {
            width: 0,
          },
          {
            width: "100%",
            stagger: 0.1,
          }
        )
        .from(
          ".card .born",
          {
            y: -100,
            opacity: 0,
          },
          "-=0.8"
        )
        .from(
          ".section-values .cookie",
          {
            scale: 0,
            rotate: "360deg",
            duration: 2,
          },
          "<-1"
        );
    });

    return () => ctx.revert();
  }, []);
};
