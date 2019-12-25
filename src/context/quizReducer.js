import {
  GET_CATEGORIES,
  GET_QUESTIONS,
  NEXT_QUESTION,
  SET_LOADING
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
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
