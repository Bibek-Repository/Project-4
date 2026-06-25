import { useState } from "react";
import "./WhyChooseUs.css";

function WhyChooseUs() {
  const [showAll, setShowAll] = useState(false);

  const points = [
    {
      title: "AI-Driven Innovation",
      description:
        "We build intelligent solutions powered by modern AI models to automate and scale your business.",
      icon: "🧠",
    },
    {
      title: "Cost-Effective Solutions",
      description:
        "Our focus is on delivering high-quality systems with optimized development costs.",
      icon: "💰",
    },
    {
      title: "Fast Prototyping",
      description:
        "We rapidly develop MVPs and prototypes to help you validate ideas quickly.",
      icon: "⚡",
    },
    {
      title: "Scalable Architecture",
      description:
        "We use MERN stack and cloud-ready systems that grow with your business.",
      icon: "📈",
    },
    {
      title: "Secure Systems",
      description:
        "We follow industry security practices and OWASP standards for safe applications.",
      icon: "🔒",
    },
    {
      title: "Dedicated Support",
      description:
        "We provide continuous technical support and maintenance for your products.",
      icon: "🤝",
    },
  ];

  const visiblePoints = showAll ? points : points.slice(0, 3);

  return (
    <section className="why-section">
      <div className="why-container">
        <h2 className="why-title">Why Choose Us</h2>
        <p className="why-subtitle">
          We deliver intelligent, scalable, and business-focused AI solutions
        </p>

        <div className="why-grid">
          {visiblePoints.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="why-btn-wrapper">
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

export default WhyChooseUs;