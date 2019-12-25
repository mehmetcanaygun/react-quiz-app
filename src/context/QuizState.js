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
    category: null,
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
    // console.log(res.data);
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data
    });
  };

  // Get questions
  const getQuestions = id => {
    state.categories.forEach(cat => {
      if (cat.categoryId === id) {
        dispatch({
          type: GET_QUESTIONS,
          payload: cat
        });
      }
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
        category: state.category,
        questions: state.questions,
        currentQuestion: state.currentQuestion,
        wrong: state.wrong,
        time: state.time,
        loading: state.loading,
        getCategories,
        getQuestions,
        setLoading
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizState;
