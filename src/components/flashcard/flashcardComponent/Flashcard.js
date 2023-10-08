import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../index.css';


const Flashcard = (props) => {
  const flashcard = props.flashcard;
  

  return (

    <Link to={`/show-flashcard/${flashcard._id}`} className=''>
    <div className='text-lg mt-4 card-container rounded-lg shadow-md p-4 m-2 hover:shadow-x1 bg-blue-100'>
    <div className='border-r border-white h-full absolute inset-y-0 right-0'></div>
         <div className=''>
        <h2>
          {/* <Link to={`/show-flashcard/${flashcard._id}`}>{flashcard.term}</Link> */}
        </h2>
        <h3 className='text-center'>{flashcard.term}</h3>
        <p>{flashcard.description}</p>


      </div>
    </div>
    </Link>
  );
};

export default Flashcard;