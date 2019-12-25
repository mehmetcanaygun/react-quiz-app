import React, { useContext } from "react";
import Question from "./Question";
import QuizContext from "../../context/quizContext";

const Quiz = () => {
  const quizContext = useContext(QuizContext);
  const { category } = quizContext;

  return (
    <div className="quiz container" style={category && { display: "block" }}>
      <Question />
    </div>
  );
};

export default Quiz;
