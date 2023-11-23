import React from "react";
import gsap from "gsap";

export const MenuAnimation = (className: string) => {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true, reversed: true });

      if (className.indexOf("active") !== -1) tl.play();

      tl.fromTo(
        ".menu",
        {
          width: 0,
        },
        {
          width: "100%",
          ease: "power2.inOut",
          duration: 1,
        }
      );

      tl.fromTo(
        ".menu ul li",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "power1",
          stagger: 0.1,
        },
        "-=0.3"
      );

      return () => ctx.revert();
    });
  }, [className]);
};
