import React from "react";
import { TeachingStyled } from "./TeachingStyled";
import { wayTeaching } from "../../utils/wayTeaching";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Teaching() {
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
          markers: true,
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

  return (
    <TeachingStyled className="section-teaching">
      <h2>Compartilhando conhecimento e paixão pela culinária doce</h2>

      <div className="card">
        <div className="logo-container">
          <div className="logo">
            <span>Ana & Bia</span>
            <span>escola de doces</span>
          </div>
        </div>

        <div className="sub-card-container">
          {wayTeaching.map(({ type, title, desc, icon }) => (
            <div key={type} className="sub-card">
              <div className="title">
                <h3>{title}</h3>
                {icon}
              </div>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </TeachingStyled>
  );
}

export default Teaching;
