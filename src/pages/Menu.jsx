import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import CategoryRail from "../components/CategoryRail";
import PromoBanner from "../components/PromoBanner";
import FoodGrid from "../components/FoodGrid";
import { StarIcon } from "../components/Icons";
import { foods } from "../data/foods";
import "./Menu.css";

const categories = [...new Set(foods.map((f) => f.category))];

function Menu({ onAdd }) {
  const [params, setParams] = useSearchParams();

  // the URL is the single source of truth for every filter
  const search = params.get("search") || "";
  const category = params.get("category") || "All";
  const diet = params.get("diet") || "all"; // all | veg | nonveg
  const special = params.get("special") === "1";

  function setParam(key, value) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  }

  const visible = foods
    .filter((f) => `${f.name} ${f.category}`.toLowerCase().includes(search.toLowerCase()))
    .filter((f) => category === "All" || f.category === category)
    .filter((f) => diet === "all" || (diet === "veg" ? f.isVeg : !f.isVeg))
    .filter((f) => !special || f.tag === "Special");

  return (
    <div className="container menu-page">
      <h1 className="page-title">Menu</h1>

      <div className="layout">
        <CategoryRail
          categories={categories}
          active={category}
          onChange={(name) => setParam("category", name === "All" ? "" : name)}
        />

        <div className="content">
          <SearchBar
            value={search}
            onChange={(value) => setParam("search", value)}
            placeholder="Search dishes or categories"
          />

          <PromoBanner
            title="Flat 40% OFF"
            subtitle="on all Pizza"
            highlight="40%"
            buttonText="Order Now"
            onClick={() => setParam("category", "Pizza")}
          />

          <div className="chips">
            <button
              className={diet === "veg" ? "chip active" : "chip"}
              onClick={() => setParam("diet", diet === "veg" ? "" : "veg")}
            >
              <span className="dot green" />
              Veg
            </button>

            <button
              className={diet === "nonveg" ? "chip active" : "chip"}
              onClick={() => setParam("diet", diet === "nonveg" ? "" : "nonveg")}
            >
              <span className="dot orange" />
              Non-Veg
            </button>

            <button
              className={special ? "chip active" : "chip"}
              onClick={() => setParam("special", special ? "" : "1")}
            >
              <StarIcon size={14} />
              Special
            </button>
          </div>

          <p className="count">Showing {visible.length} of {foods.length} dishes</p>

          <FoodGrid foods={visible} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
}

export default Menu;