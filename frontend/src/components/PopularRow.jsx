import Section from "./Section";
import PopularCard from "./PopularCard";
import "./PopularRow.css";

function PopularRow({ foods, onAdd }) {
  return (
    <Section eyebrow="Trending this week" title="Popular right now">
      <div className="popular-row">
        {foods.map((food) => (
          <PopularCard key={food.id} food={food} onAdd={onAdd} />
        ))}
      </div>
    </Section>
  );
}

export default PopularRow;