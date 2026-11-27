import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "./Badge";
import FoodImage from "./FoodImage";
import { HeartIcon, PlusIcon } from "./Icons";
import "./FoodCard.css";

function FoodCard({ food, onAdd }) {
  const { id, name, price, oldPrice, category, isVeg, available, description, tag, image } = food;
  const [liked, setLiked] = useState(false);

  return (
    <article className={available ? "food-card" : "food-card unavailable"}>
      <div className="media">
        <Link to={`/food/${id}`} className="photo" aria-label={`View ${name}`}>
          <FoodImage image={image} name={name} category={category} />
        </Link>

        {tag && (
          <span className="tag">
            <Badge text={tag} tone="dark" />
          </span>
        )}

        <button
          className={liked ? "like-btn liked" : "like-btn"}
          aria-label="Save to favourites"
          onClick={() => setLiked(!liked)}
        >
          <HeartIcon size={16} filled={liked} />
        </button>
      </div>

      <div className="info">
        <h3>
          <span className={isVeg ? "veg-mark veg" : "veg-mark nonveg"} />
          <Link to={`/food/${id}`}>{name}</Link>
        </h3>

        <p className="desc">{description}</p>

        <div className="bottom">
          <div className="prices">
            <span className="price">₹{price}</span>
            {oldPrice > 0 && <s>₹{oldPrice}</s>}
          </div>

          <button className="add-btn" disabled={!available} onClick={() => onAdd(food)}>
            {available ? (
              <>
                Add
                <PlusIcon size={14} />
              </>
            ) : (
              "Sold out"
            )}
          </button>
        </div>
      </div>
    </article>
  );
}

export default FoodCard;