import React, { useReducer } from "react";
import QuizContext from "./quizContext";
import QuizReducer from "./quizReducer";
import axios from "axios";
import {
  GET_CATEGORIES,
  GET_QUESTIONS,
  NEXT_QUESTION,
  SET_LOADING
} from "./types";

const QuizState = props => {
  const initialState = {
    categories: [],
    questions: [],
    currentQuestion: {},
    wrong: [],
    time: 0,
    loading: false
  };

  const [state, dispatch] = useReducer(QuizReducer, initialState);

  // Get categories
  const getCategories = async () => {
    setLoading();

    const res = await axios.get("./data/questions.json");

    dispatch({
      type: GET_CATEGORIES,
      payload: res.data
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
        categories: state.categories,
        questions: state.questions,
        currentQuestion: state.currentQuestion,
        wrong: state.wrong,
        time: state.time,
        loading: state.loading,
        getCategories,
        setLoading
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizState;
