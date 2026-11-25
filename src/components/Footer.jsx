import "./Footer.css";

const columns = [
  { title: "Explore", items: ["Home", "Menu", "About", "Best sellers"] },
  { title: "Company", items: ["About us", "Careers", "Press", "Partners"] },
  { title: "Legal", items: ["Terms of service", "Privacy policy", "Allergen info"] },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="brand-col">
          <p className="footer-brand">FOODAPP</p>
          <p>Restaurant-quality meals, cooked to order and delivered to your door.</p>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="col">
            <h4>{col.title}</h4>
            <ul>
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

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