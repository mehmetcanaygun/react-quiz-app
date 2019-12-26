import { GET_QUESTIONS, SET_CURRENT, SET_LOADING } from "./types";

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
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
