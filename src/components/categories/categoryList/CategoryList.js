import React from "react";
import CategoryCard from "../categoryCard/CategoryCard";
import "../../../index.css";
import "./categoryList.styles.css";

function CategoryList(props) {
  if (!props.categories || props.categories.length === 0) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <ul className="categories-list">
      {props.categories.map((category) => (
        <CategoryCard
          key={category._id} // Use a unique identifier as the key
          id={category._id}
          name={category.name}
          categoryCount={props.categories.length}
        />
      ))}
    </ul>
  );
}

export default CategoryList;

// import React from "react";
// import CategoryCard from "../categoryCard/CategoryCard";
// import "../../../index.css";
// import "./categoryList.styles.css";

// function CategoryList(props) {
//   if (props.categories.length === 0) {
//     console.log("Category Props:", props.categories);
//     return (
//       <div className="center">
//         <h2>Loading...</h2>
//       </div>
//     );
//   }

//   return (
//     <ul className="categories-list">
//       {props.categories.map((category) => {
//         console.log("Category data:", category); // Log each category's data
//         return (
//           <CategoryCard
//             key={category.id}
//             id={category._id}
//             name={category.name}
//             categoryCount={props.categories.length}
//           />
//         );
//       })}
//     </ul>
//   );
// }

// export default CategoryList;
