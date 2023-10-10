
import React, { useState, useEffect } from 'react';
import '../../../index.css'
import './showCategoryCardList.styles.css'
import axios from 'axios';

import CategoryCard from '../categoryCard/CategoryCard';


 function ShowCategoryCardList() {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    axios
      .get('http://localhost:3500/categories', {
        headers: {
          'Cache-Control': 'no-cache',
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setCategories(res.data);
          console.log(res.data)
          console.log('Data fetched successfully:', res.data);
        } else {
          console.error('Data request was successful, but response status code is not 200.');
        }
      })
      .catch((err) => {
        console.error('Error while fetching data:', err);
      });
  }, []);

  // const categoryCardList =
  //   categories.length === 0
  //     ? 'there is no category card list record!'
  //     : categories.map((category, k) => <CategoryCard category={category} key={k} />); 
   
  const categoryCardList =
  categories.length === 0
    ? 'There is no category card list record!'
    : categories.map((category, k) => (
        <CategoryCard category={category} key={k} />
      ));
  

  return ( 
    //centers it horizontally
    <div className='container mx-auto'>
      <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto p-4">{categoryCardList}</div>
    </div> 
 
    )
  }
  export default ShowCategoryCardList;
  
  
  
 