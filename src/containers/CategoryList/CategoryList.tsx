import { CategoryCard } from '@/components/Categories';
import { categories } from '@/data/categories';

const CategoryList: React.FC = () => (
  <div className="category-list">
    {categories.map(({ id, name }) => (
      <CategoryCard key={id} id={id} name={name} />
    ))}
  </div>
);

export default CategoryList;
