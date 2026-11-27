import { Link } from "react-router-dom";
import { UtensilsIcon } from "./Icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="brand-col">
          <p className="brand">
            <span className="logo"><UtensilsIcon size={16} /></span>
            FoodApp
          </p>
          <p>Restaurant-quality meals, cooked to order and delivered to your door.</p>
        </div>

        <div className="col">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/orders">Track order</Link></li>
          </ul>
        </div>

        <div className="col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About us</Link></li>
          </ul>
        </div>

        <div className="col">
          <h4>Contact</h4>
          <ul>
            <li>hello@foodapp.example</li>
            <li>Open daily, 10 AM to 11 PM</li>
          </ul>
        </div>
      </div>

      <p className="copy">© {new Date().getFullYear()} FoodApp. All rights reserved.</p>
    </footer>
  );
}

export default Footer;