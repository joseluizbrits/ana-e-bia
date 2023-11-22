import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ServicesGridProps = {
  id: string;
  title: string;
  desc: string;
  icon: JSX.Element;
}[];

export const ServicesGridAnimation = (
  mobile: boolean,
  servicesGrid: ServicesGridProps
) => {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".section-services .title", {
        scrollTrigger: {
          trigger: ".section-services .title",
          start: "-=100px 80%",
          end: "bottom center",
        },
        opacity: 0,
        x: 600,
        ease: "power3.out",
        duration: 1,
      });

      if (!mobile)
        gsap.from(`.section-services .cards li`, {
          scrollTrigger: {
            trigger: `.section-services .cards`,
            start: "-=200px 80%",
            end: "bottom center",
          },
          opacity: 0,
          y: 200,
          ease: "power3.out",
          stagger: 0.3,
          duration: 1,
        });

      if (mobile)
        servicesGrid.forEach(({ id }) => {
          gsap.from(`.section-services .cards .${id}`, {
            scrollTrigger: {
              trigger: `.section-services .cards .${id}`,
              start: "-=260px 80%",
              end: "bottom center",
            },
            opacity: 0,
            y: 200,
            ease: "power3.out",
            duration: 1,
          });
        });

      gsap.from(".section-services .sub-title", {
        scrollTrigger: {
          trigger: `.section-services .sub-title`,
          start: "-=64px 80%",
          end: "bottom center",
        },
        opacity: 0,
        x: -100,
      });
    });

    return () => ctx.revert();
  }, [mobile, servicesGrid]);
};
