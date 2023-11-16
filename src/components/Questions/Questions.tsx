import React from "react";
import { QuestionsStyled } from "./QuestionsStyled";
import PlusCircle from "../../assets/svg/PlusCircle";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FAQs } from "../../utils/FAQs";

function Questions() {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: { trigger: ".section-questions" },
          start: "top 60%",
          end: "bottom center",
        })
        .from(".section-questions .card", {
          y: 600,
          duration: 1,
          ease: "elastic.out(1, .8)",
        })
        .from(
          ".section-questions .card h2",
          {
            y: -100,
            opacity: 0,
          },
          "-=0.5"
        )
        .from(".accordion-list li", {
          x: -100,
          opacity: 0,
          stagger: 0.1,
          ease: "power3.out",
        });
    });

    return () => ctx.revert();
  }, []);

  const [active, setActive] = React.useState("");

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    if (!e.currentTarget) return;

    if (e.currentTarget.id === active) return setActive("");

    const questionId = e.currentTarget.id;
    return setActive(questionId);
  }

  return (
    <QuestionsStyled className="section-questions">
      <div className="card">
        <h2>Perguntas frequentes (FAQs)</h2>

        <ul className="accordion-list">
          {FAQs.map(({ question, answer }, index) => (
            <li key={index}>
              <div
                className="question"
                id={`question-${index}`}
                onClick={handleClick}
              >
                <p>{question}</p>

                <PlusCircle
                  className={active === `question-${index}` ? "active" : ""}
                />
              </div>

              {index !== FAQs.length - 1 && <hr />}

              <div
                className={
                  active === `question-${index}` ? "answer active" : "answer"
                }
              >
                <p>{answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </QuestionsStyled>
  );
}

export default Questions;
