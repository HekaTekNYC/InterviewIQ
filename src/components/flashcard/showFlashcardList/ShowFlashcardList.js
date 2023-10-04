import React, { useState, useEffect } from 'react';
import '../../../index.css'
import './showFlashcardList.styles.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Flashcard from '../flashcardComponent/Flashcard';

function ShowFlashcardList() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3500/api/flashcards')
      .then((res) => {
        setFlashcards(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowFlashcardList');
      });
  }, []);

  const flashcardList =
    flashcards.length === 0
      ? 'there is no flashcard record!'
      : flashcards.map((flashcard, k) => <Flashcard flashcard={flashcard} key={k} />); 

  return ( 
    <div className='ShowFlashcardList'>
      {/* <div className='container'> */}
      <div className='container mx-auto px-4'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Flashcard List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-flashcard'
              className='btn btn-outline-warning float-right'
            >
              + Add New Flashcard
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{flashcardList}</div>
      </div>
    </div>
  );
}

export default ShowFlashcardList;