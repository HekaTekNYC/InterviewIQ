// src/data/categories.ts
export interface Flashcard {
  id: string; // scoped within category: "1", "2", "intro", etc.
  question: string;
  answer: string;
}

export interface Category {
  id: string; // slug, e.g. "web-development"
  name: string;
  flashcards: Flashcard[];
}

// Example data (category IDs can be manually slugged or use slugify)
export const categories: Category[] = [
  {
    id: 'html',
    name: 'HTML',
    flashcards: [
      {
        id: '1',
        question: 'What does HTML stand for?',
        answer: 'HyperText Markup Language',
      },
      {
        id: '2',
        question: 'What is the <head> tag used for?',
        answer: 'Contains meta info, title, links to scripts/styles.',
      },
    ],
  },
  {
    id: 'css',
    name: 'CSS',
    flashcards: [
      {
        id: '1',
        question: 'What does CSS stand for?',
        answer: 'Cascading Style Sheets',
      },
      {
        id: '2',
        question: 'Difference between class and ID selectors?',
        answer: 'Classes are reusable, IDs are unique.',
      },
    ],
  },
];
