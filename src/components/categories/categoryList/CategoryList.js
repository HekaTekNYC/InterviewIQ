import React from "react"
import CategoryCard from "../categoryCard/CategoryCard"
import {Link} from "react-router-dom"
import "../../../index.css"
import "./categoryList.styles.css"

const CategoryList = () => {
  // Category card data
  const categories = [
    {
      id: "c1",
      name: "Frontend",
      subCount: "30",
    },
    {
      id: "c2",
      name: "Backend",
      subCount: "20",
    },
    {
      id: "c3",
      name: "Languages",
      subCount: "26",
    },
    {
      id: "c4",
      name: "Behavioral",
      subCount: "37",
    },
  ]

  if (!categories || categories.length === 0) {
    return <p>No categories available</p>
  }
  // handleclick needs to go here

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {categories.map(category => (
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
  )
}

export default CategoryList
