import React, { useReducer } from "react";
import QuizContext from "./quizContext";
import QuizReducer from "./quizReducer";
import axios from "axios";
import { GET_QUESTIONS, SET_CURRENT, SET_LOADING } from "./types";

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

    // res.data.results.forEach(result => {
    //   console.log(result, state.questionIndex);
    // });

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
        setLoading
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizState;
