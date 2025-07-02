import React from 'react';
import { Flashcard as FlashcardType } from '@/data/flashcards';
import { Flashcard } from '@/components/Flashcards';

interface FlashcardListProps {
  flashcards: FlashcardType[];
  currentIndex: number;
}

const FlashcardList: React.FC<FlashcardListProps> = ({
  flashcards,
  currentIndex,
}) => {
  const card = flashcards[currentIndex];

  return (
    <div className="flashcard-list">
      <Flashcard
        question={card.question}
        answer={card.answer}
        hint={card.hint}
        explanation={card.explanation}
        reference={card.reference}
        tags={card.tags}
      />
    </div>
  );
};

export default FlashcardList;
