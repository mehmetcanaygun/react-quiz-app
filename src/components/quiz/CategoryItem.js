import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoryItem = ({ category: { name, id, img } }) => {
  return (
    <Link
      to={`/quiz/${id}`}
      className="categories__item shadow"
      style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
    >
      {name}
    </Link>
  );
};

CategoryItem.prototype = {
  cat: PropTypes.object.isRequired
};

export default CategoryItem;
