import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ServicesWithImageProps = {
  id: string;
  type: string;
  title: string;
  desc: string;
  tags: string[];
  nav: boolean;
  img?: string | undefined;
}[];

export const MagnifyingGlassAnimation = (
  servicesWithImage: ServicesWithImageProps
) => {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      servicesWithImage?.forEach((_, index) => {
        const direction = index % 2 === 0 ? 1 : -1;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: `.title-${index + 1}`,
              start: "top 80%",
              end: "bottom center",
            },
          })
          .from(`.card-${index + 1}`, {
            x: -200 * direction,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
          })
          .from(
            `.image-${index + 1}`,
            {
              x: -400 * direction,
              scale: 0.8,
              ease: "power3.out",
              duration: 1,
            },
            "<"
          )
          .from(
            `.image-${index + 1} img`,
            {
              scale: 0,
              ease: "power3.out",
              duration: 1,
            },
            "<"
          )
          .from(
            `.description-${index + 1}`,
            {
              x: -40,
              opacity: 0,
              ease: "power3.out",
              duration: 1,
            },
            "-=0.7"
          )
          .from(
            `.title-${index + 1}`,
            {
              y: 100,
              opacity: 0,
              ease: "power3.out",
              duration: 1,
            },
            "<+0.3"
          );
      });
    });

    return () => ctx.revert();
  }, [servicesWithImage]);
};
