import React from "react";
import gsap from "gsap";

export const HeroAnimation = (
  text?: string[] | undefined,
  page?: "services" | "school"
) => {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero", {
        "--circleScale": 0,
        duration: 1,
        delay: 1.5,
      });

      if (text)
        gsap.from(".hero p", {
          opacity: 0,
          y: -100,
          ease: "power2.inOut",
          duration: 1,
          delay: 1,
        });

      if (page === "services") {
        gsap.from(".title-services", {
          y: 100,
          opacity: 0,
          ease: "power3.out",
          duration: 1,
          delay: 0.8,
        });

        gsap.from(".nav-services li", {
          y: 100,
          opacity: 0,
          stagger: 0.1,
          ease: "power3.out",
          duration: 1,
          delay: 1.2,
        });
      }

      if (page === "school") {
        gsap.from(".title-school", {
          y: 100,
          opacity: 0,
          ease: "power3.out",
          duration: 1,
          delay: 0.8,
        });
      }
    });

    return () => ctx.revert();
  }, [text, page]);
};
