import React from 'react';
import '../../../index.css';

function CategoryCard({ category }) {
  return (
    <div className="flex justify-center items-center text-xl mt-4 card-container rounded-lg drop-shadow-md p-4 m-2 hover:shadow-x1 bg-blue-100">
      <h3>{category.name}</h3>
    </div>
  );
}

export default CategoryCard;




