import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./Icons";
import "./Section.css";

function Section({ title, linkTo, linkText = "View all", children }) {
  return (
    <section className="section">
      <div className="head">
        <h2>{title}</h2>
        {linkTo && (
          <Link to={linkTo}>
            {linkText}
            <ArrowRightIcon size={15} />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

export default Section;