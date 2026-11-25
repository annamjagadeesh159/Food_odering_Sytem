import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import FoodImage from "../components/FoodImage";
import Badge from "../components/Badge";
import { StarIcon, ClockIcon, FlameIcon } from "../components/Icons";
import { foods } from "../data/foods";
import "./FoodDetails.css";

function FoodDetails({ onAdd }) {
  const { id } = useParams();          // from the URL, always a string
  const navigate = useNavigate();

  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);

  // Effect 1: "load" the dish. The timeout pretends to be a slow backend (Day 6 replaces it)
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const found = foods.find((f) => f.id === Number(id));
      setFood(found || null);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);   // cleanup: cancel if the id changes or we leave
  }, [id]);

  // Effect 2: set the browser tab title
  useEffect(() => {
    if (!food) return;

    document.title = `${food.name} | FoodApp`;
    return () => {
      document.title = "FoodApp";
    };
  }, [food]);

  if (loading) {
    return <div className="container"><p className="empty">Loading dish...</p></div>;
  }

  if (!food) {
    return (
      <div className="container">
        <p className="empty">We could not find a dish with id {id}.</p>
        <Link to="/menu" className="btn ghost-dark">Back to the menu</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="food-details">
        <div className="picture">
          <FoodImage image={food.image} name={food.name} category={food.category} />
        </div>

        <div className="text">
          <button className="back" onClick={() => navigate(-1)}>Back</button>

          <p className="eyebrow">{food.category}</p>
          <h1>{food.name}</h1>
          <p className="price">₹{food.price}</p>

          <ul className="meta">
            <li><StarIcon size={16} />{food.rating} rating</li>
            <li><ClockIcon size={16} />{food.prepTime} min</li>
            <li><FlameIcon size={16} />{food.spice}</li>
            <li>{food.isVeg ? "Vegetarian" : "Non-vegetarian"}</li>
          </ul>

          {!food.available && <Badge text="Sold out" tone="red" />}

          <div className="actions">
            <button
              className="btn primary"
              disabled={!food.available}
              onClick={() => onAdd(food)}
            >
              Add to cart
            </button>
            <Link to="/cart" className="btn ghost-dark">View cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;