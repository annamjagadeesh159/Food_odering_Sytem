import FoodCard from "./FoodCard";
import "./FoodGrid.css";

function FoodGrid({ foods, onAdd }) {
  if (foods.length === 0) {
    return <p className="empty">No dishes match your filters.</p>;
  }

  return (
    <div className="food-grid">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} onAdd={onAdd} />
      ))}
    </div>
  );
}

export default FoodGrid;