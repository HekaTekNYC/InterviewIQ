import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubCard from "../subCard/SubCard";
import { useHttpClient } from "../../hooks/httpHook";
// import { useHttpClient } from "../../../shared/components/hooks/httpHook";

const SubList = () => {
  // const { categoryId } = useParams();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        console.log("Before fetch request");
        const responseData = await sendRequest(
          "http://localhost:3500/api/subcategories"
        );
        console.log("responseData in Subcategories", responseData);
        const subcategories = responseData.subcategories;

        console.log("Subcategories before setting state:", subcategories);

        setSubcategories(responseData);
      } catch (err) {
        // Handle errors
      }
    };
    fetchSubcategories();
  }, [sendRequest]);

  return (
    <div>
      <h1>Subcategories</h1>
      {subcategories.map((subcategory) => (
        <SubCard key={subcategory._id} subcategory={subcategory} />
      ))}
    </div>
  );
};

export default SubList;

// import React, { useState, useEffect } from 'react';
// import '../../../index.css'
// // import './showCategoryCardList.styles.css'
// import axios from 'axios';

// import SubCard from '../subCard/subCard';

//  function ShowSubCardList() {
//   const [subcategories, setSubcategories] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:3500/categories/subcategories', {
//         headers: {
//           'Cache-Control': 'no-cache',
//         },
//       })
//       .then((res) => {
//         if (res.status === 200) {
//           setSubcategories(res.data);
//           console.log(res.data)
//           console.log('Data fetched successfully:', res.data);
//         } else {
//           console.error('Data request was successful, but response status code is not 200.');
//         }
//       })
//       .catch((err) => {
//         console.error('Error while fetching data:', err);
//       });
//   }, []);

//   // const categoryCardList =
//   //   categories.length === 0
//   //     ? 'there is no category card list record!'
//   //     : categories.map((category, k) => <CategoryCard category={category} key={k} />);

//   const subcategoryCardList =
//     subcategories.length === 0
//     ? 'There is no subcategory card list record!'
//     : subcategories.map((subcategory, k) => (
//         <SubCard subcategory={subcategory} key={k} />
//       ));

//   return (
//     //centers it horizontally
//     <div className='container mx-auto'>
//       <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto p-4">{subcategoryCardList}</div>
//     </div>

//     )
//   }
//   export default ShowSubCardList;
