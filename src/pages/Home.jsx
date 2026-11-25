import { Link } from "react-router-dom";
import PopularRow from "../components/PopularRow";
import { foods } from "../data/foods";
import "./Home.css";

const features = [
  { number: "01", title: "Fast delivery", text: "Most orders reach your door in about thirty minutes." },
  { number: "02", title: "Fresh ingredients", text: "Every dish is prepared to order and never reheated." },
  { number: "03", title: "Live order tracking", text: "Follow your order from the kitchen to your doorstep." },
];

function Home({ onAdd }) {
  const popular = [...foods].sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <>
      <section className="hero home">
        <div className="inner">
          <p className="eyebrow">Fresh, fast and local</p>
          <h1>Great food, delivered<br />to your door.</h1>
          <p className="lead">
            Order from your favourite kitchens and follow every step of your delivery.
          </p>

          <div className="hero-actions">
            <Link to="/menu" className="btn primary">Order now</Link>
            <Link to="/about" className="btn ghost">About us</Link>
          </div>
        </div>
      </section>

      <div className="container">
        <PopularRow foods={popular} onAdd={onAdd} />

        <section className="features">
          {features.map((feature) => (
            <article key={feature.number} className="feature">
              <span className="number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}

export default Home;