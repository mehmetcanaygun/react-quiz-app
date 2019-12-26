import React, { useContext, useEffect } from "react";
import Spinner from "../layout/Spinner";
import QuizContext from "../../context/quizContext";
import Answers from "./Answers";

const Quiz = ({ match }) => {
  const quizContext = useContext(QuizContext);
  const { getQuestions, currentQuestion, currentIndex, loading } = quizContext;

  useEffect(() => {
    getQuestions(match.params.category);
    // eslint-disable-next-line
  }, []);

  const { category, question } = currentQuestion;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="quiz">
        <p className="quiz__category">{category}</p>
        <p className="quiz__question">
          {question &&
            question
              .replace(/&#039;/g, `'`)
              .replace(/&quot;/g, `"`)
              .replace(/&amp;/, `&`)
              .replace(/&eacute;/, `é`)}
        </p>
        <Answers />
      </div>
    );
  }
};

export default Quiz;
