import { useState } from "react";
import "./FeaturedProjects.css";

function FeaturedProjects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "AI Customer Support Bot",
      description:
        "Automated chatbot system that handles 70% of customer queries using NLP and AI workflows.",
      tag: "AI Assistant",
    },
    {
      title: "Business Analytics Dashboard",
      description:
        "Interactive dashboard for real-time sales and customer behavior insights.",
      tag: "Data Analytics",
    },
    {
      title: "E-commerce Automation System",
      description:
        "Automated order processing, inventory tracking, and notification system.",
      tag: "Automation",
    },
    {
      title: "Cloud-Based CRM Platform",
      description:
        "Scalable CRM system for managing leads, clients, and business operations.",
      tag: "Cloud Solution",
    },
    {
      title: "Mobile Delivery App",
      description:
        "Cross-platform delivery tracking app for real-time logistics management.",
      tag: "Mobile App",
    },
    {
      title: "AI Prototyping Tool",
      description:
        "Rapid AI model testing platform for startups and product validation.",
      tag: "AI Innovation",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-subtitle">
          Real-world AI and software solutions we have developed
        </p>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <span className="project-tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>

        <div className="projects-btn-wrapper">
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

export default FeaturedProjects;