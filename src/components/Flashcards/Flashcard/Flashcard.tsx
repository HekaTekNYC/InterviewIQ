import React, { useState } from 'react';
import './flashcard.css';

type FlashcardProps = {
  question: string;
  answer: string;
};

const Flashcard: React.FC<FlashcardProps> = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flashcard ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="front">{question}</div>
      <div className="back">{answer}</div>
    </div>
  );
};

export default Flashcard;
