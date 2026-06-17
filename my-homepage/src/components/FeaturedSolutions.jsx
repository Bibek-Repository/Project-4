import "./FeaturedSolutions";

function FeaturedSolutions() {
  return (
    <section className="featured-solutions">

      <h2>Featured Software Solutions</h2>

      <div className="solution-grid">

        <div className="solution-card">
          <img
            src="https://picsum.photos/600/400?1"
            alt=""
          />
          <h3>AI Customer Support System</h3>
          <p>Automated customer engagement platform.</p>
        </div>

        <div className="solution-card">
          <img
            src="https://picsum.photos/600/400?2"
            alt=""
          />
          <h3>Healthcare Analytics Platform</h3>
          <p>Machine learning powered decision support.</p>
        </div>

        <div className="solution-card">
          <img
            src="https://picsum.photos/600/400?3"
            alt=""
          />
          <h3>Smart Business Dashboard</h3>
          <p>Real-time analytics and reporting system.</p>
        </div>

      </div>

    </section>
  );
}

export default FeaturedSolutions;