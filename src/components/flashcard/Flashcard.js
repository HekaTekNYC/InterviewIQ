import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const Flashcard = (props) => {
  const flashcard = props.flashcard;

  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Flashcard'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-flashcard/${flashcard._id}`}>{flashcard.term}</Link>
        </h2>
        <h3>{flashcard.term}</h3>
        <p>{flashcard.description}</p>
      </div>
    </div>
  );
};

export default Flashcard;