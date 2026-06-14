import "../pages/About.css";

function AboutStats() {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "AI Models Built" },
    { number: "15+", label: "Global Clients" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <section className="about-stats">
      {stats.map((s, i) => (
        <div key={i} className="stat-card">
          <h2>{s.number}</h2>
          <p>{s.label}</p>
        </div>
      ))}
    </section>
  );
}

export default AboutStats;