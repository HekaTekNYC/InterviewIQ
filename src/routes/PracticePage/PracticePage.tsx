import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FlashcardControls } from '@/components/Flashcards';
import { CategoryList, FlashcardList } from '@/containers';

const dummyCategories = [
  { id: 'javascript', name: 'JavaScript' },
  { id: 'react', name: 'React' },
];

const dummyFlashcards: Record<string, { question: string; answer: string }[]> =
  {
    javascript: [
      {
        question: 'What is a closure?',
        answer: 'A function that has access to outer scope variables.',
      },
      {
        question: 'What is hoisting?',
        answer: 'Variable and function declarations are moved to the top.',
      },
    ],
    react: [
      {
        question: 'What is JSX?',
        answer: 'JavaScript XML, a syntax extension for React.',
      },
      {
        question: 'What is a hook?',
        answer: 'A special function that lets you use React features.',
      },
    ],
  };

const PracticePage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!categoryId) {
    return <CategoryList categories={dummyCategories} />;
  }

  const flashcards =
    dummyFlashcards[categoryId as keyof typeof dummyFlashcards];

  if (!flashcards) {
    return <p>Category not found.</p>;
  }

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="practice-page">
      <FlashcardList flashcards={flashcards} currentIndex={currentIndex} />
      <FlashcardControls
        onPrev={handlePrev}
        onNext={handleNext}
        disablePrev={currentIndex === 0}
        disableNext={currentIndex === flashcards.length - 1}
      />
    </div>
  );
};

export default PracticePage;
