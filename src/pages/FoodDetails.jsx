import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import FoodImage from "../components/FoodImage";
import QuantityStepper from "../components/QuantityStepper";
import { ArrowLeftIcon, HeartIcon, StarIcon } from "../components/Icons";
import { foods } from "../data/foods";
import { SIZES, EXTRAS_BY_CATEGORY, unitPriceFor } from "../utils/pricing";
import "./FoodDetails.css";

function FoodDetails({ onAdd }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState("Regular");
  const [extras, setExtras] = useState([]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [liked, setLiked] = useState(false);

  // Effect 1: "load" the dish (the timeout pretends to be a backend; Day 6 replaces it)
  useEffect(() => {
    setLoading(true);
    setSize("Regular");
    setExtras([]);
    setQty(1);

    const timer = setTimeout(() => {
      const found = foods.find((f) => f.id === Number(id));
      setFood(found || null);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  // Effect 2: browser tab title
  useEffect(() => {
    if (!food) return;

    document.title = `${food.name} | FoodApp`;
    return () => {
      document.title = "FoodApp";
    };
  }, [food]);

  // Effect 3: hide the "Added" message after about 2 seconds
  useEffect(() => {
    if (!added) return;

    const timer = setTimeout(() => setAdded(false), 2000);
    return () => clearTimeout(timer);
  }, [added]);

  if (loading) {
    return <div className="container"><p className="empty">Loading dish...</p></div>;
  }

  if (!food) {
    return (
      <div className="container">
        <p className="empty">We could not find a dish with id {id}.</p>
        <Link to="/menu" className="btn outline">Back to the menu</Link>
      </div>
    );
  }

  const extraOptions = EXTRAS_BY_CATEGORY[food.category] || [];
  const unitPrice = unitPriceFor(food, size, extras);
  const total = unitPrice * qty;
  const discount = food.oldPrice > 0 ? Math.round((1 - food.price / food.oldPrice) * 100) : 0;

  function toggleExtra(name) {
    setExtras((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  }

  function handleAdd() {
    onAdd(food, { size, extras, unitPrice, qty });
    setAdded(true);
  }

  return (
    <div className="container details-page">
      <button className="back" onClick={() => navigate(-1)}>
        <ArrowLeftIcon size={16} />
        Back
      </button>

      <div className="details">
        <div className="picture">
          <FoodImage image={food.image} name={food.name} category={food.category} />

          <button
            className={liked ? "like liked" : "like"}
            aria-label="Save to favourites"
            onClick={() => setLiked(!liked)}
          >
            <HeartIcon size={18} filled={liked} />
          </button>
        </div>

        <div className="text">
          <h1>{food.name}</h1>

          <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <StarIcon key={i} size={16} className={i < Math.round(food.rating) ? "on" : "off"} />
            ))}
            <span>{food.rating} ({food.reviews} reviews)</span>
          </div>

          <div className="price-row">
            <span className="price">₹{food.price}</span>
            {food.oldPrice > 0 && <s>₹{food.oldPrice}</s>}
            {discount > 0 && <span className="off-badge">{discount}% OFF</span>}
          </div>

          <p className="desc">{food.description}</p>

          <h4>Size</h4>
          <div className="sizes">
            {SIZES.map((s) => (
              <button
                key={s.name}
                className={size === s.name ? "active" : ""}
                onClick={() => setSize(s.name)}
              >
                {s.name}
              </button>
            ))}
          </div>

          {extraOptions.length > 0 && (
            <>
              <h4>Add Extras</h4>
              <div className="extras">
                {extraOptions.map((extra) => (
                  <label key={extra.name}>
                    <input
                      type="checkbox"
                      checked={extras.includes(extra.name)}
                      onChange={() => toggleExtra(extra.name)}
                    />
                    {extra.name}
                    <span className="extra-price">+₹{extra.price}</span>
                  </label>
                ))}
              </div>
            </>
          )}

          <div className="buy">
            <QuantityStepper
              value={qty}
              onDecrease={() => setQty((prev) => Math.max(1, prev - 1))}
              onIncrease={() => setQty((prev) => prev + 1)}
            />

            <button className="btn primary" disabled={!food.available} onClick={handleAdd}>
              {!food.available ? "Sold out" : added ? "Added to cart" : `Add to Cart - ₹${total}`}
            </button>
          </div>

          {added && <Link to="/cart" className="view-cart">View cart</Link>}
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;