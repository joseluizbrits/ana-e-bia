import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const QuestionsAnimation = () => {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: { trigger: ".section-questions" },
          start: "top 60%",
          end: "bottom center",
        })
        .from(".section-questions .card", {
          y: 600,
          duration: 1,
          ease: "elastic.out(1, .8)",
        })
        .from(
          ".section-questions .card h2",
          {
            y: -100,
            opacity: 0,
          },
          "-=0.5"
        )
        .from(".accordion-list li", {
          x: -100,
          opacity: 0,
          stagger: 0.1,
          ease: "power3.out",
        });
    });

    return () => ctx.revert();
  }, []);
};
