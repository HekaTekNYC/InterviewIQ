import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ToggleFlip = (props) => {
    const flashcard = props.flashcard;
    const [isFlipped, setIsFlipped] = useState(false);
  
    const toggleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
        <Link to={`/show-flashcard/${flashcard._id}`} className='card-link'>
          <div
            className={`mt-4 card-container flex justify-center items-center rounded-lg shadow-md p-4 m-2 hover:shadow-x1 relative group ${isFlipped ? 'flip' : ''}`}
            onClick={toggleFlip}
          >
            <div className='w-full h-full absolute top-0 left-0 backface-hidden transform rotate-y-180 group-hover:rotate-y-0 transition-transform'>
              <div className='bg-white rounded-lg p-4'>
                <p className='text-center'>{flashcard.definition}</p>
              </div>
            </div>
            <div className='w-full h-full absolute top-0 left-0 transform rotate-y-0 group-hover:rotate-y-180 transition-transform'>
              <div className='bg-white rounded-lg p-4'>
                <h2 className='text-center'>{flashcard.term}</h2>
              </div>
            </div>
          </div>
        </Link>
      );
    };
    
  
  export default ToggleFlip;