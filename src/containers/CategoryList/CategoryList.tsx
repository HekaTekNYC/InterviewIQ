import { CategoryCard } from '@/components/Categories';
import './category-list.css';

type Category = {
  id: string;
  name: string;
};

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.map((cat) => (
        <CategoryCard key={cat.id} id={cat.id} name={cat.name} />
      ))}
    </div>
  );
};

export default CategoryList;
