import "../pages/About.css";

const team = [
  {
    name: "AI Engineer",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Full Stack Developer",
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
  },
  {
    name: "Data Scientist",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
];

function AboutTeam() {
  return (
    <section className="about-team">
      <h2>Meet Our Team</h2>

      <div className="team-grid">
        {team.map((t, i) => (
          <div key={i} className="team-card">
            <img src={t.img} alt={t.name} />
            <p>{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutTeam;