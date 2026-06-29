import "./AboutCTA.css";
import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section className="about-cta">
      <h2>Want to Build Something Amazing?</h2>
      <p>Let's create your AI-powered solution together.</p>
      <Link to="/Contact" className="cta-button">
        Contact Us
      </Link>
    </section>
  );
}

export default AboutCTA;