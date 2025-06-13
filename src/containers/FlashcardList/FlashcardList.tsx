import React, { useState } from 'react';
import { Flashcard } from '@/components/Flashcards';

interface FlashcardListProps {
  flashcards: { question: string; answer: string }[];
  currentIndex: number;
}

const FlashcardList: React.FC<FlashcardListProps> = ({
  flashcards,
  currentIndex,
}) => {
  const card = flashcards[currentIndex];

  return (
    <div className="flashcard-list">
      <Flashcard question={card.question} answer={card.answer} />
    </div>
  );
};

export default FlashcardList;
