// src/components/Categories/CategoryCard/CategoryCard.tsx
import { Link } from 'react-router-dom';
import './category-card.css';

interface CategoryCardProps {
  id: string;
  name: string;
}

const CategoryCard = ({ id, name }: CategoryCardProps) => (
  <div className="category-card">
    <Link
      to={`/practice/${id}`}
      className="category-card__link"
      aria-label={`Practice category: ${name}`}
    >
      <h3 className="category-card__title">{name}</h3>
    </Link>
  </div>
);

export default CategoryCard;
