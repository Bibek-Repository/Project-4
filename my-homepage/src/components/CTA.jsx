import "./CTA.css";
import { useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Ready to Build Your AI Solution?</h2>
        <p className="cta-subtitle">
          Let's turn your idea into a powerful AI-driven product. Get in touch
          with our team today.
        </p>

        <div className="cta-buttons">
          <button className="primary-btn" onClick={() => navigate("/contact")}>
            Get Free Consultation
          </button>
          <button
              className="secondary-btn"
              onClick={() => navigate("/FinalServices")}
            >
              View Our Services
            </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;