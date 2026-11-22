import { useState } from "react";
import Badge from "./Badge";
import FoodImage from "./FoodImage";
import { HeartIcon, StarIcon, ClockIcon, FlameIcon, PlusIcon } from "./Icons";
import "./FoodCard.css";

function FoodCard({ food, onAdd }) {
  const { name, price, category, isVeg, available, rating, prepTime, spice, tag, image } = food;
  const [liked, setLiked] = useState(false);

  return (
    <article className={available ? "food-card" : "food-card unavailable"}>
      <div className="photo">
        <FoodImage image={image} name={name} category={category} />

        <div className="badges">
          {tag && <Badge text={tag} tone="dark" />}
          {!available && <Badge text="Sold out" tone="red" />}
        </div>

        <button
          className={liked ? "like-btn liked" : "like-btn"}
          aria-label="Save to favourites"
          onClick={() => setLiked(!liked)}
        >
          <HeartIcon size={18} filled={liked} />
        </button>
      </div>

      <div className="info">
        <div className="title-row">
          <h3>{name}</h3>
          <span className="price">₹{price}</span>
        </div>

        <ul className="meta">
          <li><ClockIcon size={14} />{prepTime} min</li>
          <li><FlameIcon size={14} />{spice}</li>
          <li>
            <span className={isVeg ? "veg-mark veg" : "veg-mark nonveg"} />
            {isVeg ? "Veg" : "Non-veg"}
          </li>
        </ul>

        <div className="bottom">
          <span className="rating"><StarIcon size={14} />{rating}</span>

          <button className="add-btn" disabled={!available} onClick={() => onAdd(food)}>
            <PlusIcon size={14} />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

export default FoodCard;