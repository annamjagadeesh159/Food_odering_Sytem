import FoodImage from "./FoodImage";
import { StarIcon, PlusIcon } from "./Icons";
import "./PopularCard.css";

function PopularCard({ food, onAdd }) {
  return (
    <article className="popular-card">
      <div className="thumb">
        <FoodImage image={food.image} name={food.name} category={food.category} />

        <button
          className="quick-add"
          aria-label={`Add ${food.name} to cart`}
          disabled={!food.available}
          onClick={() => onAdd(food)}
        >
          <PlusIcon size={16} />
        </button>
      </div>

      <h4>{food.name}</h4>

      <div className="row">
        <span className="price">₹{food.price}</span>
        <span className="rating"><StarIcon size={13} />{food.rating}</span>
      </div>
    </article>
  );
}

export default PopularCard;