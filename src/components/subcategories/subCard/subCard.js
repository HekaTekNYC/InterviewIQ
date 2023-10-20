import React from "react";
import { Link } from "react-router-dom";

const SubCard = (props) => {
  return (
    <div className="bg-white p-4 m-2 rounded-lg shadow-md hover:shadow-x1">
      {/* <Link to={`/${props.id}/categories`}> */}
      <div className="user-item__info">
        <h2 className="text-lg">{props.name}</h2>
        <h3>
          {props.subcategoryCount}{" "}
          {props.subcategoryCount === 1 ? "Subcategory" : "Subcategories"}
        </h3>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default SubCard;

// const subCard = ({subcategories}) => {
//   return (

//     <Link to={`/subcategories-list/${subategories._id}`}>
//         <div className="flex justify-center items-center text-xl mt-4 card-container rounded-lg drop-shadow-md p-4 m-2 hover:shadow-x1 bg-blue-100">
//             <div className='border-r border-white h-full absolute inset-y-0 right-0'></div>
//             <h3 className='text-center'>{subcategoires.name}</h3>
//             <p>{subcategories.description}</p>
//         </div>
//     </Link>

//   )
// }

// export default subCard;

// import React from "react";

// import { Link } from "react-router-dom";
