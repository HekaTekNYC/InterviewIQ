import React from "react";

import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  const cardColors = [
    "bg-red-300",
    "bg-green-300",
    "bg-blue-300",
    "bg-pink-300",
    "bg-yellow-300",
  ];

    // Get the color class for the current card based on its index
    const cardColorClass = cardColors[props.index % cardColors.length];

  return (
    <div className="bg-white p-4 m-2 rounded-lg shadow-md hover:shadow-x1">
      <Link to={`/${props.id}/categories`}>
        <div className="user-item__info">
          <h2 className="text-lg text-gray-700">{props.name}</h2>
          <h3 className="text-gray-700">
            {props.categoryCount}{" "}
            {props.categoryCount === 1 ? "Category" : "Categories"}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
