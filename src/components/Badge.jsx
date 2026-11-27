import "./Badge.css";

function Badge({ text, tone = "blue" }) {
  return <span className={`badge ${tone}`}>{text}</span>;
}

export default Badge;