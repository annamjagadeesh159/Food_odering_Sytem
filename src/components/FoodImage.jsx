import { useState } from "react";
import "./FoodImage.css";

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("");
}

function FoodImage({ image, name, category }) {
  const [failed, setFailed] = useState(false);

  if (!image || failed) {
    return (
      <div className="food-image placeholder">
        <span className="initials">{getInitials(name)}</span>
        {category && <span className="cat">{category}</span>}
      </div>
    );
  }

  return (
    <img
      className="food-image"
      src={image}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default FoodImage;