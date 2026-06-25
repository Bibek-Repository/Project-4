
import { useState } from "react";
import "./Services.css";

function Services() {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: "AI Virtual Assistant",
      description:
        "Smart conversational AI to automate customer support, onboarding, and internal workflows.",
      icon: "🤖",
    },
    {
      title: "Web Development",
      description:
        "Modern, scalable, and responsive web applications using cutting-edge technologies.",
      icon: "🌐",
    },
     {
      title: "Mobile Apps",
      description:
        "Cross-platform mobile applications for Android and iOS with smooth user experience.",
      icon: "📱",
    },
    {
      title: "Automation Solutions",
      description:
        "Automate repetitive business tasks and improve operational efficiency using AI.",
      icon: "⚙️",
    },
    {
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights using dashboards and AI-driven analytics.",
      icon: "📊",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure, deployment, and management for modern applications.",
      icon: "☁️",
    },
  ];

  const visibleServices = showAll ? services : services.slice(0,3);

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className = "services-subtitle">
          AI-powered solutions designed to transform your business
        </p>

        <div className="services-grid">
          {visibleServices.map((service, index)=> (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              </div>
          ))}
        </div>
      

      <div className="services-btn-wrapper">
        <button
          className="toggle-btn"
          onClick={() => setShowAll(!showAll)}
        >{showAll ? "View Less" : "View More"}</button>
      </div>
      </div>
    </section>
  );
}

export default Services;