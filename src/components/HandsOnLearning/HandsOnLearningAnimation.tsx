import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const HandsOnLearningAnimation = () => {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".section-hands-on .title h2 > *", {
        scrollTrigger: {
          trigger: ".section-hands-on",
          start: "top 80%",
          end: "bottom center",
        },
        x: -200,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
        duration: 1,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".p-1",
            start: "30% 80%",
            end: "bottom 60%",
          },
        })
        .from(".p-1 img", {
          x: -100,
          y: -100,
          scale: 0.8,
          opacity: 0,
          ease: "power3.out",
          duration: 1,
        })
        .from(
          ".p-1 p",
          {
            x: -200,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
          },
          "<+0.2"
        );

      gsap.from(".p-2 p", {
        scrollTrigger: {
          trigger: ".p-2",
          start: "30% 80%",
          end: "bottom center",
        },
        x: -200,
        opacity: 0,
        ease: "power3.out",
        duration: 1,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".p-3",
            start: "30% 80%",
            end: "bottom 60%",
          },
        })
        .from(".p-3 p", {
          x: -200,
          opacity: 0,
          ease: "power3.out",
          duration: 1,
        })
        .from(
          ".p-3 img",
          {
            x: -140,
            y: 100,
            scale: 0.8,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
          },
          "<+0.2"
        );
    });

    return () => ctx.revert();
  }, []);
};
