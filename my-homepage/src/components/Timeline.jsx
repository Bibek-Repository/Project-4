import "./Timeline.css";

function Timeline() {
  return (
    <section className="timeline-section">

      <h2>Events Timeline</h2>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-date">Jan 2026</div>

          <div className="timeline-content">
            <h3>AI Product Launch</h3>
            <p>Launching our next-generation virtual assistant.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">Mar 2026</div>

          <div className="timeline-content">
            <h3>Machine Learning Workshop</h3>
            <p>Practical AI training for developers.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">Jun 2026</div>

          <div className="timeline-content">
            <h3>Global AI Conference</h3>
            <p>International conference on AI innovation.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">Oct 2026</div>

          <div className="timeline-content">
            <h3>Startup Networking Event</h3>
            <p>Meet investors and technology founders.</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Timeline;