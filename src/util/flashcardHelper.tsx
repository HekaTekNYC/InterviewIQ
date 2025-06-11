import { categories, Category, Flashcard } from '@/data/categories';

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find((cat) => cat.id === categoryId);
}

export function getFlashcardByFullId(fullId: string): Flashcard | undefined {
  const [categoryId, flashcardId] = fullId.split('-');
  const category = getCategoryById(categoryId);
  if (!category) return undefined;
  return category.flashcards.find((card) => card.id === flashcardId);
}
