export type Category = {
  id: string;
  name: string;
};

export type Flashcard = {
  id: string;
  question: string;
  answer: string;
  categoryId: string;
  code: string;
  hint?: string;
  explanation?: string;
  reference?: { label: string; url: string }[];
};
