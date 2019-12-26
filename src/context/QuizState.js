import React, { useReducer } from "react";
import QuizContext from "./quizContext";
import QuizReducer from "./quizReducer";
import axios from "axios";
import {
  GET_QUESTIONS,
  SET_CURRENT,
  NEXT_QUESTION,
  COUNT_WRONG,
  RESET_STATE,
  SET_LOADING
} from "./types";

const QuizState = props => {
  const initialState = {
    questions: [],
    currentQuestion: {},
    currentIndex: 0,
    wrong: [],
    loading: false
  };

  const [state, dispatch] = useReducer(QuizReducer, initialState);

  // Get questions
  const getQuestions = async id => {
    setLoading();

    const res = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${id}&difficulty=easy&type=multiple`
    );

    dispatch({
      type: GET_QUESTIONS,
      payload: res.data.results
    });

    setQuestion();
  };

  // Set current question
  const setQuestion = () => {
    dispatch({
      type: SET_CURRENT
    });
  };

  // Next question
  const nextQuestion = () => {
    if (state.currentIndex < 9) {
      dispatch({
        type: NEXT_QUESTION
      });

      setQuestion();
    } else {
      endQuiz();
    }
  };

  // Count Wrong Answers
  const countWrong = wrongAnswer => {
    dispatch({
      type: COUNT_WRONG,
      payload: wrongAnswer
    });
  };

  // End Quiz
  const endQuiz = () => {
    console.log("Bitti");
  };

  // Reset State
  const resetState = () => {
    dispatch({
      type: RESET_STATE
    });
  };

  // Set Loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  return (
    <QuizContext.Provider
      value={{
        questions: state.questions,
        currentQuestion: state.currentQuestion,
        currentIndex: state.currentIndex,
        wrong: state.wrong,
        loading: state.loading,
        getQuestions,
        setQuestion,
        nextQuestion,
        countWrong,
        resetState,
        setLoading
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizState;
