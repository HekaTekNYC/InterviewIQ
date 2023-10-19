import React from "react";
import CategoryCard from "../categoryCard/CategoryCard";
import { Link } from "react-router-dom";
import "../../../index.css";
import "./categoryList.styles.css";

const CategoryList = ({ categories }) => {
  if (!categories || !Array.isArray(categories)) {
    return <div>No categories to display</div>;
  }
  return (
    <div className="grid grid-cols-3 gap-4">
      {categories.map((category, key) => (
        <Link to={"/api/subcategories/"} key={category._id}>
          <CategoryCard
            id={category._id}
            name={category.name}
            categoryCount={category.length}
          />
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;

// import React from "react";
// import CategoryCard from "../categoryCard/CategoryCard";
// import "../../../index.css";
// import "./categoryList.styles.css";

// const CategoryList = ({ categories }) => {
//   // handleclick needs to go here
//   return (
//     <>
//       <div className="grid grid-cols-3 gap-4">
//         {categories.map((category) => (
//           <div key={category._id}>
//             <CategoryCard
//               id={category._id}
//               name={category.name}
//               categoryCount={category.subcategories.length}
//             />{" "}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default CategoryList;

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
