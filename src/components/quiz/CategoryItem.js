import React, { useContext } from "react";
import PropTypes from "prop-types";
import QuizContext from "../../context/quizContext";

const CategoryItem = cat => {
  const quizContext = useContext(QuizContext);
  const { getQuestions } = quizContext;

  return (
    <button
      className="categories__item shadow"
      onClick={() => {
        getQuestions(cat.cat.categoryId);
      }}
      style={{
        backgroundImage: `url(${cat.cat.categoryImg})`,
        backgroundSize: "cover"
      }}
    >
      {cat.cat.category}
    </button>
  );
};

CategoryItem.prototype = {
  cat: PropTypes.object.isRequired
};

export default CategoryItem;
