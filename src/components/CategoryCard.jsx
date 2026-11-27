import { Link } from "react-router-dom";
import FoodImage from "./FoodImage";
import "./CategoryCard.css";

function CategoryCard({ name }) {
  return (
    <Link to={`/menu?category=${encodeURIComponent(name)}`} className="category-card">
      <div className="pic">
        <FoodImage image={`/images/categories/${name.toLowerCase()}.jpg`} name={name} />
      </div>
      <span>{name}</span>
    </Link>
  );
}

export default CategoryCard;