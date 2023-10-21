import React from "react";
import CategoryCard from "../categoryCard/CategoryCard";
import "../../../index.css";
import "./categoryList.styles.css";





const CategoryList = () => {

  // Category card data
  const categories = [
    {
      id: 'c1',
      name: 'Frontend',
      subCount: '30'
    },
    {
      id: 'c2',
      name: 'Backend',
      subCount: '20'
    },
    {
      id: 'c3',
      name: 'Languages',
      subCount: '26'
    },
    {
      id: 'c4',
      name: 'Behavioral',
      subCount: '37'
    },

  ]


  if (!categories || categories.length === 0) {
    return <p>No categories available</p>;
  }
  // handleclick needs to go here
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryCard
              id={category.id}
              name={category.name}
              subCount={category.subCount}
            />{" "}
          </div>
        ))}
      </div>
    </>
  );
};

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
