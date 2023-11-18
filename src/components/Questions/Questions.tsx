import React from "react";
import { QuestionsStyled } from "./QuestionsStyled";
import { QuestionsAnimation } from "./QuestionsAnimation";
import PlusCircle from "../../assets/svg/PlusCircle";
import { FAQs } from "../../utils/FAQs";

function Questions() {
  QuestionsAnimation();

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
