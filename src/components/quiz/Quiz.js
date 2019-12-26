import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import QuizContext from "../../context/quizContext";
import Answers from "./Answers";

const Quiz = ({ match }) => {
  const quizContext = useContext(QuizContext);
  const {
    getQuestions,
    currentQuestion,
    currentIndex,
    resetState,
    loading
  } = quizContext;

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
        <Link
          to="/"
          className="quiz__back-btn"
          onClick={() => {
            resetState();
          }}
        >
          <i className="fas fa-chevron-circle-left"></i>
        </Link>
        <p className="quiz__category">{category}</p>
        <div className="quiz__process-bar">
          <div style={{ width: `${currentIndex * 10 + 10}%` }}></div>
        </div>
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
