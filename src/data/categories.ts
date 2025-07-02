export interface Category {
  id: string; // slug like "css", "javascript"
  name: string;
}

export const categories: Category[] = [
  {
    id: 'css',
    name: 'CSS',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
  },
  {
    id: 'react',
    name: 'React',
  },
];
