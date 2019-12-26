import React from "react";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const categories = [
    {
      name: "Books",
      id: "10",
      img: "./data/book.jpg"
    },
    {
      name: "Films",
      id: "11",
      img: "./data/film.jpg"
    },
    {
      name: "Music",
      id: "12",
      img: "./data/music.jpg"
    },
    {
      name: "Television",
      id: "14",
      img: "./data/television.jpg"
    },
    {
      name: "Video Games",
      id: "15",
      img: "./data/videogame.jpg"
    }
  ];

  return (
    <div className="categories">
      <h1 className="categories__title">Choose a category to start</h1>
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category}></CategoryItem>
      ))}
    </div>
  );
};

export default Categories;
