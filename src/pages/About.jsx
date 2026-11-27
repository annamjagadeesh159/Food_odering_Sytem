import "./About.css";

const values = [
  { title: "Cooked to order", text: "Every dish is prepared when you order it, never reheated." },
  { title: "Local kitchens", text: "We partner with neighbourhood restaurants and chefs." },
  { title: "Honest pricing", text: "The price you see is the price you pay, with no hidden charges." },
];

function About() {
  return (
    <div className="container about-page">
      <h1 className="page-title">About us</h1>
      <p className="lead">
        We connect hungry customers with great local kitchens and get every order to
        the door fresh and on time.
      </p>

      <div className="values">
        {values.map((value) => (
          <article key={value.title} className="card">
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default About;