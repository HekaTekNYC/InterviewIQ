import React from "react";

import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  return (
    <div className="bg-white p-4 m-2 rounded-lg shadow-md hover:shadow-x1">
      <Link to={`/${props.id}/categories`}>
        <div className="user-item__info">
          <h2 className="text-lg">{props.name}</h2>
          <h3>
            {props.categoryCount}{" "}
            {props.categoryCount === 1 ? "Category" : "Categories"}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
