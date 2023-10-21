import React, { useState } from "react";
import { QuestionStyled } from "./QuestionsStyled";
import PlusCircle from "../../assets/svg/plusCircle";

import { FAQs } from "../../utils/FAQs";

function Questions() {
  const [active, setActive] = useState(false);

  return (
    <QuestionStyled>
      <div className="card">
        <h2>Perguntas frequentes (FAQs)</h2>
        <ul className="accordion-list">
          {FAQs.map(({ question, answer }, index) => (
            <li key={index}>
              <div className="question" onClick={() => setActive(!active)}>
                <p>{question}</p>
                <PlusCircle />
              </div>
              {index !== FAQs.length - 1 ? <hr /> : null}
              <div className="answer">{answer}</div>
            </li>
          ))}
        </ul>
      </div>
    </QuestionStyled>
  );
}

export default Questions;
