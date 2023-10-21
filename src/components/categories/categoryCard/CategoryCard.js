import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  return (
    <div className="p-4 m-2 max-w-7xl max-h-20 rounded-lg shadow-md hover:shadow-x3 bg-white">
      <div className="flex flex-col justify-center items-center ">
        <Link to={`/${props.id}/categories`}>
          <h1 className="text-2xl font-bold text-gray-700 text-center">
            {props.name}
          </h1>
          <h3 className="text-gray-700 text-lg text-center pt-3">
            {props.subCount}{" "}
            {props.subCount === 1 ? "Subcategory" : "Subcategories"}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
