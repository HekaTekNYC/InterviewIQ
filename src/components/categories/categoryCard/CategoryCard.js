import React from "react";

const CategoryCard = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/categories`}>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.categoryCount}{" "}
              {props.categoryCount === 1 ? "Category" : "Categories"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default CategoryCard;
