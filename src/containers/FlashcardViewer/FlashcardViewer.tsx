import { useState } from 'react';
import { Flashcard as FlashcardType } from '@/data/flashcards';
import { Flashcard } from '@/components/Flashcards';
import { FlashcardControls } from '@/components/Flashcards';

import './flashcard-viewer.css';

interface FlashcardViewerProps {
  flashcards: FlashcardType[];
  categoryId?: string;
}

const FlashcardViewer: React.FC<FlashcardViewerProps> = ({
  flashcards,
  categoryId,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const [activeOverlay, setActiveOverlay] = useState<
    null | 'hint' | 'reference' | 'explanation'
  >(null);

  const isOverlayOpen = activeOverlay !== null;

  const filteredFlashcards = categoryId
    ? flashcards.filter((card) => card.categoryId === categoryId)
    : flashcards;

  const currentCard = filteredFlashcards[currentIndex];

  const handleNext = () => {
    if (isOverlayOpen) {
      setActiveOverlay(null);
    }

    if (currentIndex < filteredFlashcards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrev = () => {
    if (isOverlayOpen) {
      setActiveOverlay(null);
    }

    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsFlipped(false);
    }
  };

  return (
    <div className="flashcard-viewer">
      <div className="flashcard-viewer__flashcards">
        <Flashcard
          {...currentCard}
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
          activeOverlay={activeOverlay}
          setActiveOverlay={setActiveOverlay}
        />
      </div>
      <div className="flashcard-viewer__flashcard-controls">
        <FlashcardControls
          index={currentIndex}
          maxIndex={filteredFlashcards.length - 1}
          onPrev={handlePrev}
          onNext={handleNext}
          disablePrev={currentIndex === 0}
          disableNext={currentIndex === filteredFlashcards.length - 1}
        />
      </div>
    </div>
  );
};

export default FlashcardViewer;
