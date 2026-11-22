import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import FilterSidebar from "../components/FilterSidebar";
import PopularRow from "../components/PopularRow";
import FoodGrid from "../components/FoodGrid";
import { foods } from "../data/foods";
import "./Menu.css";

// calculated once: these do not depend on any state
const categories = [...new Set(foods.map((f) => f.category))];
const priceLimit = Math.ceil(Math.max(...foods.map((f) => f.price)) / 10) * 10;
const popular = [...foods].sort((a, b) => b.rating - a.rating).slice(0, 5);

function Menu({ onAdd }) {
  // ---------- STATE: one value per filter ----------
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("popular");
  const [maxPrice, setMaxPrice] = useState(priceLimit);
  const [spice, setSpice] = useState("All");
  const [diet, setDiet] = useState("all");

  // ---------- DERIVED: filtered and sorted list ----------
  const visible = foods
    .filter((f) => `${f.name} ${f.category}`.toLowerCase().includes(search.toLowerCase()))
    .filter((f) => category === "All" || f.category === category)
    .filter((f) => f.price <= maxPrice)
    .filter((f) => spice === "All" || f.spice === spice)
    .filter((f) => diet === "all" || (diet === "veg" ? f.isVeg : !f.isVeg))
    .sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      return b.rating - a.rating;
    });

  function clearFilters() {
    setSearch("");
    setCategory("All");
    setSort("popular");
    setMaxPrice(priceLimit);
    setSpice("All");
    setDiet("all");
  }

  return (
    <>
      <section className="hero">
        <div className="inner">
          <p className="eyebrow">Full menu</p>
          <h1>Everything we cook,<br />in one place.</h1>
          <p className="lead">
            Filter by category, diet or spice level and find your next favourite dish.
          </p>

          <SearchBar search={search} onSearchChange={setSearch} />
        </div>
      </section>

      <FilterBar
        categories={categories}
        category={category}
        onCategoryChange={setCategory}
        sort={sort}
        onSortChange={setSort}
      />

      <div className="container menu-page">
        <PopularRow foods={popular} onAdd={onAdd} />

        <div className="menu-layout">
          <FilterSidebar
            priceLimit={priceLimit}
            maxPrice={maxPrice}
            onMaxPriceChange={setMaxPrice}
            spice={spice}
            onSpiceChange={setSpice}
            diet={diet}
            onDietChange={setDiet}
            onClear={clearFilters}
          />

          <div>
            <p className="count">Showing {visible.length} of {foods.length} dishes</p>
            <FoodGrid foods={visible} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;