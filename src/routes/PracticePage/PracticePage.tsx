import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FlashcardControls } from '@/components/Flashcards';
import { CategoryList, FlashcardList } from '@/containers';
import { categories } from '@/data/categories';
import { flashcards } from '@/data/flashcards';

import './practice-page.css';

const PracticePage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter flashcards based on the categoryId
  const filteredFlashcards = categoryId
    ? flashcards.filter((card) => card.categoryId === categoryId)
    : null;

  const handleNext = () => {
    if (filteredFlashcards && currentIndex < filteredFlashcards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (filteredFlashcards && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="practice-page">
      {!categoryId ? (
        <div className="practice-page__categories">
          <h2>Categories</h2>
          <div className="practice-page__categories-container">
            <CategoryList categories={categories} />
          </div>
        </div>
      ) : filteredFlashcards && filteredFlashcards.length > 0 ? (
        <div className="practice-page__flashcards">
          <h2>Flashcards</h2>
          <div className="practice-page__flashcards-container">
            <div className="practice-page__flashcards-list">
              <FlashcardList
                flashcards={filteredFlashcards}
                currentIndex={currentIndex}
              />
            </div>
            <div className="practice-page__flashcards-controls">
              <FlashcardControls
                onPrev={handlePrev}
                onNext={handleNext}
                disablePrev={currentIndex === 0}
                disableNext={currentIndex === filteredFlashcards.length - 1}
              />
            </div>
          </div>
        </div>
      ) : (
        <p className="practice-page__error">
          Category not found or no flashcards available.
        </p>
      )}
    </div>
  );
};

export default PracticePage;
