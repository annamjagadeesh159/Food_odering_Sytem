import'./Badge.css'
function Badge({ text, tone = "gray" }) {
  return <span className={`badge ${tone}`}>{text}</span>;
}

export default Badge;