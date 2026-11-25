import "./Dashboard.css";

// sample numbers: Day 24 calculates the real ones from the database
const stats = [
  { label: "Total orders", value: "128" },
  { label: "Revenue", value: "₹48,250" },
  { label: "Customers", value: "76" },
];

function Dashboard() {
  return (
    <>
      <p className="eyebrow">Admin</p>
      <h1>Dashboard</h1>

      <div className="stats">
        {stats.map((stat) => (
          <div key={stat.label} className="stat">
            <p className="label">{stat.label}</p>
            <p className="value">{stat.value}</p>
          </div>
        ))}
      </div>

      <p className="note">These are sample values. Real totals, food management and order management arrive on Day 24.</p>
    </>
  );
}

export default Dashboard;