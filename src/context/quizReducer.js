import {
  GET_QUESTIONS,
  SET_CURRENT,
  NEXT_QUESTION,
  COUNT_WRONG,
  END_QUIZ,
  RESET_STATE,
  SET_LOADING
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        currentQuestion: state.questions[state.currentIndex]
      };
    case NEXT_QUESTION:
      return {
        ...state,
        currentIndex: state.currentIndex + 1
      };
    case COUNT_WRONG:
      return {
        ...state,
        wrong: [...state.wrong, action.payload]
      };
    case END_QUIZ:
      return {
        ...state,
        endQuiz: true
      };
    case RESET_STATE:
      return {
        questions: [],
        currentQuestion: {},
        currentIndex: 0,
        wrong: [],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
