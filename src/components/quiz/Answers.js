import React, { Fragment, useContext } from "react";
import QuizContext from "../../context/quizContext";

const Answers = () => {
  const quizContext = useContext(QuizContext);
  const { currentQuestion } = quizContext;
  const { correct_answer, incorrect_answers } = currentQuestion;

  // Make an array of 4 unique numbers to place buttons in that order
  // Place the correct answer at 0's index.
  let arr = [];
  while (arr.length < 4) {
    let r = Math.floor(Math.random() * 4);
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return (
    <Fragment>
      {arr.map((item, index) => {
        return item === 0 ? (
          <button key={index} className="quiz__answer">
            {correct_answer}
          </button>
        ) : (
          <button key={index} className="quiz__answer">
            {incorrect_answers && incorrect_answers[item - 1]}
          </button>
        );
      })}
    </Fragment>
  );
};

export default Answers;
