import React from "react";
import { MagnifyingGlassStyled } from "./MagnifyingGlassStyled";
import { services } from "../../utils/services";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const servicesWithImage = services.filter((service) => service.img);

function MagnifyingGlass() {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      servicesWithImage.forEach((_, index) => {
        const direction = index % 2 === 0 ? 1 : -1;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: `.title-${index + 1}`,
              start: "top 80%",
              end: "bottom center",
              markers: true,
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
            `.title-${index + 1}`,
            {
              y: 100,
              opacity: 0,
              ease: "power3.out",
              duration: 1,
            },
            "-=0.5"
          )
          .from(
            `.description-${index + 1}`,
            {
              x: -40,
              opacity: 0,
              ease: "power3.out",
              duration: 1,
            },
            "<+0.3"
          );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {servicesWithImage?.map(({ type, title, desc, tags, img }, index) => (
        <MagnifyingGlassStyled key={type}>
          <div className={`title title-${index + 1}`}>
            <h2>{title}</h2>
          </div>

          <div className={`card card-${index + 1}`}>
            <div className={`sub-card sub-card-${index + 1}`}>
              <div className={`description description-${index + 1}`}>
                <p>{desc}</p>

                <div className={`tags tags-${index + 1}`}>
                  {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`image image-${index + 1}`}>
            <img src={img} alt="Mesa decorada com muitas flores e de doces" />
          </div>
        </MagnifyingGlassStyled>
      ))}
    </>
  );
}

export default MagnifyingGlass;
