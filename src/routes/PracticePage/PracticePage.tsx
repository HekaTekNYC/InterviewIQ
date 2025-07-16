import { useParams } from 'react-router-dom';
import { CategoryList, FlashcardViewer } from '@/containers';
import { categories } from '@/data/categories';
import { flashcards } from '@/data/flashcards';

import './practice-page.css';

const PracticePage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();

  const filteredFlashcards = categoryId
    ? flashcards.filter((card) => card.categoryId === categoryId)
    : null;

  const getCategoryName = (id: string) =>
    categories.find((cat) => cat.id === id)?.name ?? id;

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
          <h2>
            Practice{' '}
            <span className="flashcard-header">
              {getCategoryName(categoryId)}
            </span>
          </h2>
          <div className="practice-page__flashcards-container">
            <FlashcardViewer flashcards={filteredFlashcards} />
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
