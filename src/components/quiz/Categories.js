import React from "react";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const categories = [
    {
      name: "General",
      id: "9",
      img: "./data/general.jpg"
    },
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
    },
    {
      name: "Science",
      id: "17",
      img: "./data/science.jpg"
    },
    {
      name: "Computers",
      id: "18",
      img: "./data/computers.jpg"
    },
    {
      name: "Mathematics",
      id: "19",
      img: "./data/mathematics.jpg"
    },
    {
      name: "Mythology",
      id: "20",
      img: "./data/mythology.jpg"
    },
    {
      name: "Sports",
      id: "21",
      img: "./data/sports.jpg"
    },
    {
      name: "Geography",
      id: "22",
      img: "./data/geography.jpg"
    },
    {
      name: "History",
      id: "23",
      img: "./data/history.jpg"
    },
    {
      name: "Celebrities",
      id: "26",
      img: "./data/celebrities.jpg"
    },
    {
      name: "Animals",
      id: "27",
      img: "./data/animals.jpg"
    },
    {
      name: "Vehicles",
      id: "28",
      img: "./data/vehicles.jpg"
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
