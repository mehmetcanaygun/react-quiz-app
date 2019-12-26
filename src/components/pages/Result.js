import React, { useContext } from "react";
import { Link } from "react-router-dom";
import QuizContext from "../../context/quizContext";

const Result = () => {
  const quizContext = useContext(QuizContext);
  const { wrong, resetState } = quizContext;

  return (
    <div className="result">
      <h1>Congratulations!</h1>
      <h3>Or, not. Let's see...</h3>
      <h3>Your score is:</h3>
      <p className="shadow">
        <span
          style={{
            color: wrong.length > 5 ? "#803434" : "#4da341"
          }}
        >
          {10 - wrong.length}
        </span>
        /10
      </p>

      <ul className="result__wrong-answers">
        {wrong.map((item, index) => (
          <li key={index}>
            {item.question
              .replace(/&#039;/g, `'`)
              .replace(/&quot;/g, `"`)
              .replace(/&amp;/, `&`)
              .replace(/&eacute;/, `é`)
              .replace(/&Uuml;/, `Ü`)}{" "}
            -{" "}
            <span>
              {item.correct_answer
                .replace(/&#039;/g, `'`)
                .replace(/&quot;/g, `"`)
                .replace(/&amp;/, `&`)
                .replace(/&eacute;/, `é`)
                .replace(/&Uuml;/, `Ü`)}
            </span>
          </li>
        ))}
      </ul>
      <Link
        to="/"
        className="result__again-btn shadow"
        onClick={() => {
          resetState();
        }}
      >
        Try Again
      </Link>
    </div>
  );
};

export default Result;
