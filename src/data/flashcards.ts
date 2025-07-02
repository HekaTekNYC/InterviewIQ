export interface Flashcard {
  id: string;
  categoryId: string;
  question: string;
  answer: string;
}

export const flashcards: Flashcard[] = [
  // CSS
  {
    id: 'css-1',
    categoryId: 'css',
    question: 'What does CSS stand for?',
    answer: 'Cascading Style Sheets',
  },
  {
    id: 'css-2',
    categoryId: 'css',
    question: 'What is the difference between class and ID selectors?',
    answer: 'Classes are reusable; IDs are unique to an element.',
  },

  // JavaScript
  {
    id: 'javascript-1',
    categoryId: 'javascript',
    question: 'What is a closure in JavaScript?',
    answer: 'A closure is a function that retains access to its outer scope.',
  },
  {
    id: 'javascript-2',
    categoryId: 'javascript',
    question: 'What is hoisting?',
    answer: 'Hoisting moves variable and function declarations to the top.',
  },

  // React
  {
    id: 'react-1',
    categoryId: 'react',
    question: 'What is JSX?',
    answer:
      'JSX is a syntax extension that allows mixing HTML with JavaScript.',
  },
  {
    id: 'react-2',
    categoryId: 'react',
    question: 'What is a React Hook?',
    answer:
      'A Hook is a special function that lets you use state and other React features.',
  },
];
