import { useState } from "react";
import "./Services.css";

import {
  FaRobot,
  FaGlobe,
  FaMobileAlt,
  FaCog,
  FaChartLine,
  FaCloud,
  FaArrowRight,
} from "react-icons/fa";

function Services() {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: "AI Virtual Assistant",
      description:
        "Smart conversational AI that automates customer support, lead generation, and business operations.",
      icon: <FaRobot />,
    },
    {
      title: "Web Development",
      description:
        "Fast, secure, and scalable websites built with modern technologies and best practices.",
      icon: <FaGlobe />,
    },
    {
      title: "Mobile Applications",
      description:
        "Beautiful Android and iOS applications designed for performance and user engagement.",
      icon: <FaMobileAlt />,
    },
    {
      title: "Automation Solutions",
      description:
        "Eliminate repetitive work using intelligent automation and AI-powered workflows.",
      icon: <FaCog />,
    },
    {
      title: "Data Analytics",
      description:
        "Transform business data into meaningful insights through dashboards and predictive analytics.",
      icon: <FaChartLine />,
    },
    {
      title: "Cloud Solutions",
      description:
        "Reliable cloud infrastructure, DevOps, deployment, and scalable hosting solutions.",
      icon: <FaCloud />,
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section className="home-services-section">

      <div className="home-services-container">

        <div className="home-services-header">

          <span>OUR SERVICES</span>

          <h2>Innovative Digital Solutions</h2>

          <p>
            We combine Artificial Intelligence, software engineering,
            cloud computing, and data science to create digital
            solutions that help businesses grow faster.
          </p>

        </div>

        <div className="home-services-grid">

          {visibleServices.map((service, index) => (

            <div className="home-service-card" key={index}>

              <div className="home-service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              {/* <button className="learn-btn">
                Learn More
                <FaArrowRight />
              </button> */}

            </div>

          ))}

        </div>

        <div className="home-services-btn-wrapper">

          <button
            className="toggle-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "View Less" : "View More"}
          </button>

        </div>

      </div>

    </section>
  );
}

export default Services;