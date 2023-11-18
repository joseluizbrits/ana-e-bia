import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const FooterAnimation = () => {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "footer",
            start: "top 80%",
            end: "bottom center",
          },
        })
        .from("footer .card", {
          y: 600,
          duration: 1,
          ease: "elastic.out(1, .8)",
        })
        .from(
          "footer .logo",
          {
            x: -100,
            opacity: 0,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          "footer .description",
          {
            x: -100,
            opacity: 0,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".networks svg",
          {
            scale: 0,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          "footer nav a",
          {
            y: -40,
            opacity: 0,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from("footer nav hr", {
          opacity: 0,
          stagger: 0.1,
          ease: "power3.out",
        })
        .from(
          "footer .copyright",
          {
            y: 40,
            opacity: 0,
            ease: "power3.out",
          },
          "-=1"
        )
        .from(
          "footer .map",
          {
            scale: 0,
            ease: "power3.out",
          },
          "<-1"
        )
        .from(
          "footer .address",
          {
            y: 40,
            opacity: 0,
            ease: "power3.out",
          },
          "-=1"
        );
    });

    return () => ctx.revert();
  }, []);
};
