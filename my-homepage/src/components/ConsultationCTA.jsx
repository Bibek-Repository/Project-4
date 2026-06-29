import "./ConsultationCTA.css";
import { Link } from "react-router-dom";

function ConsultationCTA() {
  return (
    <section className="consultation-cta">

      <h2>
        Ready To Build Your Next Software Solution?
      </h2>

      <p>
        Let's discuss your project requirements today.
      </p>

      <Link
        to="/Contact"
        className="consultation-btn"
      >
        Request Consultation
      </Link>

    </section>
  );
}

export default ConsultationCTA;