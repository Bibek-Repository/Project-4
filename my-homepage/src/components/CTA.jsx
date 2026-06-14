import "./CTA.css";

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Ready to Build Your AI Solution?</h2>
        <p className="cta-subtitle">
          Let's turn your idea into a powerful AI-driven product. Get in touch
          with our team today.
        </p>

        <div className="cta-buttons">
          <button className="cta-primary">Get Free Consultation</button>
          <button className="cta-secondary">View Our Services</button>
        </div>
      </div>
    </section>
  );
}

export default CTA;