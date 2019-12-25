import React, { useContext, useEffect } from "react";
import QuizContext from "../../context/quizContext";

const Categories = () => {
  const quizContext = useContext(QuizContext);
  const { getCategories, category } = quizContext;

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  if (!category) {
    return (
      <div className="categories">
        <h1 className="categoris__title">Choose a category to start</h1>
      </div>
    );
  } else {
    return null;
  }
};

export default Categories;
