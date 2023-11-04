import { NavLink } from 'react-router-dom';
import './Categories.scss';

const categories = [
  {
    name: 'home',
    url: '/',
  },
  {
    name: 'note',
    url: 'note',
  },
];

const Categories = () => {
  return (
    <div className="CategoriesBlock">
      {categories.map((c) => (
        <NavLink to={c.url} className="Category" key={c.name}>
          {c.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
