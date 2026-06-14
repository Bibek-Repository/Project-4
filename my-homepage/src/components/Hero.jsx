import "./Hero.css";
import { FaRobot, FaChartLine, FaCode } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-badge">
            🚀 AI-Powered Innovation
          </span>

          <h1>
            Transform Ideas Into
            <span> Intelligent Digital Solutions</span>
          </h1>

          <p>
            AI Solutions develops cutting-edge software,
            virtual assistants, automation tools and AI-powered
            prototypes that help businesses innovate faster and
            reduce operational costs.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Free Consultation
            </button>

            <button className="secondary-btn">
              Explore Services
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <h3>120+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3>95%</h3>
              <p>Satisfaction</p>
            </div>

            <div>
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>

        </div>

        <div className="hero-visual">

          <div className="dashboard-card">

            <div className="card-header">
              AI Performance Dashboard
            </div>

            <div className="metric">
              <FaRobot />
              <span>Virtual Assistant Active</span>
            </div>

            <div className="metric">
              <FaChartLine />
              <span>+48% Productivity</span>
            </div>

            <div className="metric">
              <FaCode />
              <span>Rapid AI Prototyping</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;