import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

export const AboutConclusionAnimation = () => {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".section-aboutConclusion .text :nth-child(1)", {
        scrollTrigger: {
          trigger: ".section-aboutConclusion",
          start: "20% 80%",
          end: "75% center",
          scrub: 1,
        },
        x: "-20%",
        opacity: 0.6,
      });

      gsap.from(".section-aboutConclusion .text :nth-child(2)", {
        scrollTrigger: {
          trigger: ".section-aboutConclusion",
          start: "20% 80%",
          end: "75% center",
          scrub: 1,
        },
        x: "20%",
        opacity: 0.6,
      });

      gsap.from(".section-aboutConclusion svg", {
        scrollTrigger: {
          trigger: ".section-aboutConclusion svg",
          start: "top center",
          end: "60% center",
          scrub: 1,
        },
        x: -200,
        y: 60,
      });
    });

    return () => ctx.revert();
  }, []);
};
