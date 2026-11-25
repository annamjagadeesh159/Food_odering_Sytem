import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="container">
      <div className="not-found">
        <p className="code">404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or has moved.</p>
        <Link to="/" className="btn primary">Go to the home page</Link>
      </div>
    </div>
  );
}

export default NotFound;