import React, { useState, useEffect } from 'react';
import '../../../index.css'
import './flashcardCategoriesList.styles.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Flashcard from '../flashcardComponent/Flashcard';



function FlashcardCategoriesList() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3500/api/flashcards')
      .then((res) => {
        setFlashcards(res.data);
      })
      .catch((err) => {
        console.log('Error from FlashcardCategoryList');
      });
  }, []);

  const flashcardList =
    flashcards.length === 0
      ? 'there is no flashcard record!'
      : flashcards.map((flashcard, k) => <Flashcard flashcard={flashcard} key={k} />); 

  return ( 
    //centers it horizontally
    <div className='container mx-auto'>
      <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto p-4">{flashcardList}</div>
    </div> 
    )
  }
  export default FlashcardCategoriesList;
  
  
  
 