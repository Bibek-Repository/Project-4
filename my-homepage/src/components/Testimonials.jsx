import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Jack Mooneyham",
      role: "Chief Executive Officer",
      feedback:
        "AI SOLUTIONS completely transformed how we manage patient operations. Their automation platform reduced administrative workload by nearly 40% while improving the overall experience for both staff and patients.",
    },
    {
      name: "Neha Patel",
      role: "Head of Data & Analytics",
      feedback:
        "The predictive analytics solution developed by AI SOLUTIONS gives our team incredible visibility into business trends. We now make faster, data-driven decisions with much greater confidence.",
    },
    {
      name: "Mark Singh",
      role: "Chief Operating Officer",
      feedback:
        "From planning to deployment, every stage of the project was handled professionally. Their AI assistant dramatically improved guest response times and increased customer satisfaction.",
    },
    {
      name: "Sneha Chowdhary",
      role: "Operations Director",
      feedback:
        "Working with AI SOLUTIONS has been one of our best technology investments. Their intelligent workflow automation streamlined internal processes and significantly boosted productivity.",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <p className="testimonials-subtitle">
          Real feedback from businesses we have helped grow with AI solutions
        </p>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="feedback">“{item.feedback}”</p>
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;