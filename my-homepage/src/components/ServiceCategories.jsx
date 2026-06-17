import "./ServiceCategories";

import {
  FaRobot,
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaChartBar,
  FaCog
} from "react-icons/fa";

function ServiceCategories() {
  return (
    <section className="service-categories">

      <h2>Our Core Services</h2>

      <div className="service-grid">

        <div className="service-card">
          <FaRobot />
          <h3>AI Assistants</h3>
          <p>Custom intelligent virtual assistants.</p>
        </div>

        <div className="service-card">
          <FaCode />
          <h3>Web Development</h3>
          <p>Modern responsive web applications.</p>
        </div>

        <div className="service-card">
          <FaMobileAlt />
          <h3>Mobile Apps</h3>
          <p>Android and iOS business applications.</p>
        </div>

        <div className="service-card">
          <FaCloud />
          <h3>Cloud Solutions</h3>
          <p>Secure and scalable cloud deployment.</p>
        </div>

        <div className="service-card">
          <FaChartBar />
          <h3>Data Analytics</h3>
          <p>Business intelligence and insights.</p>
        </div>

        <div className="service-card">
          <FaCog />
          <h3>Automation</h3>
          <p>Workflow optimization and automation.</p>
        </div>

      </div>
    </section>
  );
}

export default ServiceCategories;