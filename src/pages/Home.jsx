import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Section from "../components/Section";
import CategoryCard from "../components/CategoryCard";
import FoodGrid from "../components/FoodGrid";
import FoodImage from "../components/FoodImage";
import { BoltIcon, PinIcon, ShieldIcon } from "../components/Icons";
import { foods } from "../data/foods";
import "./Home.css";

const perks = [
  { Icon: BoltIcon, title: "30 min", text: "Delivery" },
  { Icon: PinIcon, title: "Live", text: "Tracking" },
  { Icon: ShieldIcon, title: "Best Quality", text: "Fresh and hygienic" },
];

const categories = [...new Set(foods.map((f) => f.category))];
const topPicks = [...foods].sort((a, b) => b.rating - a.rating).slice(0, 4);

function Home({ onAdd }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function handleSearch() {
    const q = search.trim();
    navigate(q ? `/menu?search=${encodeURIComponent(q)}` : "/menu");
  }

  return (
    <div className="container home-page">
      <section className="hero-card">
        <div className="copy">
          <h1>
            Delicious Food,
            <span>Delivered Fast</span>
          </h1>
          <p className="lead">Crave it. Order it. Enjoy it.</p>

          <SearchBar
            large
            value={search}
            onChange={setSearch}
            onSubmit={handleSearch}
            placeholder="Search for food, restaurants..."
          />

          <div className="perks">
            {perks.map(({ Icon, title, text }) => (
              <div key={title} className="perk">
                <span className="ic"><Icon size={20} /></span>
                <div>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="visual">
          <FoodImage image="/images/hero.jpg" name="Food App" />
        </div>
      </section>

      <Section title="Popular Categories" linkTo="/menu" linkText="View All">
        <div className="category-grid">
          {categories.map((name) => (
            <CategoryCard key={name} name={name} />
          ))}
        </div>
      </Section>

      <Section title="Top Picks" linkTo="/menu" linkText="View All">
        <FoodGrid foods={topPicks} onAdd={onAdd} />
      </Section>
    </div>
  );
}

export default Home;