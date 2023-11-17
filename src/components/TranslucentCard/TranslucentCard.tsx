import React from "react";
import { TranslucentCardStyled } from "./TranslucentCardStyled";
import { services } from "../../utils/services";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function TranslucentCard() {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".translucent-cards",
            start: "+=64px 80%",
            end: "bottom center",
          },
        })
        .from(".translucent-cards .card", {
          y: -200,
          opacity: 0,
          stagger: 0.2,
          ease: "power3.out",
          duration: 1,
        })
        .from(
          ".translucent-cards h2",
          {
            y: -40,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
          },
          "<+0.3"
        )
        .from(
          ".translucent-cards .description",
          {
            y: -40,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
          },
          "<+0.3"
        )
        .from(
          ".translucent-cards .description > *",
          {
            y: -40,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
          },
          "<+0.3"
        )
        .fromTo(
          ".translucent-cards .card",
          {
            boxShadow: "0 0 0 0 var(--p4)",
          },
          {
            boxShadow: "-24px 24px 0 0 var(--p4)",
            ease: "power1.out",
            duration: 1,
            repeat: -1,
            yoyo: true,
          },
          "<+0.3"
        );
    });

    return () => ctx.revert();
  }, []);

  const servicesWithoutImage = services.filter((service) => !service.img);

  return (
    <TranslucentCardStyled className="translucent-cards">
      {servicesWithoutImage.map(({ type, title, desc, tags }) => (
        <div key={type} className="card">
          <h2>{title}</h2>

          <div className="description">
            <p>{desc}</p>

            <div className="tags">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </TranslucentCardStyled>
  );
}

export default TranslucentCard;
