import React, { useContext, useEffect } from "react";
import CategoryItem from "./CategoryItem";
import Spinner from "../layout/Spinner";
import QuizContext from "../../context/quizContext";

const Categories = () => {
  const quizContext = useContext(QuizContext);
  const { getCategories, categories, category, loading } = quizContext;

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="categories" style={category && { display: "none" }}>
        <h1 className="categories__title">Choose a category to start</h1>
        {categories.map(cat => (
          <CategoryItem key={cat.categoryId} cat={cat}></CategoryItem>
        ))}
      </div>
    );
  }
};

export default Categories;
