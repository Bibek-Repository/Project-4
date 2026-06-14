import "./Stats.css";

function Stats() {
  return (
    <section className="stats">
      <div className="stats-container">

        <div className="stat-card">
          <h2>500+</h2>
          <p>Clients Served</p>
        </div>

        <div className="stat-card">
          <h2>120+</h2>
          <p>Projects Delivered</p>
        </div>

        <div className="stat-card">
          <h2>30+</h2>
          <p>Countries Reached</p>
        </div>

        <div className="stat-card">
          <h2>98%</h2>
          <p>Customer Satisfaction</p>
        </div>

      </div>
    </section>
  );
}

export default Stats;