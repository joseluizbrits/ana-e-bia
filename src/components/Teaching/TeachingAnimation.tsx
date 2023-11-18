import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const TeachingAnimation = () => {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".section-teaching h2", {
        scrollTrigger: {
          trigger: ".section-teaching h2",
          start: "top bottom",
          end: "center bottom",
        },
        "--circleTop": -100,
        "--circleLeft": -100,
        ease: "power3.out",
        duration: 1,
      });

      gsap.from(".section-teaching h2", {
        scrollTrigger: {
          trigger: ".section-teaching h2",
          start: "50% bottom",
          end: "125% bottom",
        },
        "--circleBottom": "-50%",
        "--circleRight": "-70%",
        opacity: 0,
        ease: "power3.out",
        duration: 2,
        delay: 0.1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-teaching .card",
          start: "start 65%",
          end: "bottom center",
        },
      });

      tl.fromTo(
        ".logo-container",
        {
          height: 0,
        },
        {
          height: "calc(100% - 80px)",
          ease: "power3.out",
          duration: 2,
        }
      );

      tl.from(
        ".logo-container .logo > *",
        {
          y: -100,
          opacity: 0,
          stagger: 0.3,
          ease: "power3.out",
          duration: 1,
        },
        "-=1.3"
      );

      tl.from(
        ".sub-card-container > *",
        {
          y: -100,
          opacity: 0,
          stagger: 0.3,
          ease: "power3.out",
          duration: 1,
        },
        "<-0.3"
      );
    });

    return () => ctx.revert();
  }, []);
};
