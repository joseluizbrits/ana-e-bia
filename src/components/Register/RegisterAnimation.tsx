import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const RegisterAnimation = () => {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#register",
            start: "15% 80%",
            end: "bottom center",
          },
        })
        .fromTo(
          "#register img",
          {
            width: 0,
            ease: "power3.out",
            duration: 2,
          },
          {
            width: "100%",
          }
        )
        .fromTo(
          "#register img",
          {
            boxShadow: "0 0 0 0 var(--p5)",
          },
          {
            boxShadow: "-20px 20px 0 0 var(--p5)",
          }
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#register .content h2",
            start: "top 80%",
            end: "bottom center",
          },
        })
        .from("#register .content h2 > *", {
          x: -100,
          opacity: 0,
          stagger: 0.1,
          ease: "power3.out",
          duration: 1,
        })
        .from(
          "#register form",
          {
            y: -100,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
          },
          "<+0.3"
        )
        .from(
          "#register form .wrapp > *",
          {
            y: -40,
            opacity: 0,
            stagger: 0.2,
            ease: "power3.out",
            duration: 1,
          },
          "<+0.2"
        );
    });

    return () => ctx.revert();
  }, []);
};
