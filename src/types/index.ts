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
  tags?: string[];
  hint?: string;
  expanded?: string;
  reference?: { label: string; url: string }[];
};
