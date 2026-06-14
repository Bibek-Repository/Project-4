import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Ravi Maharjan",
      role: "Startup Founder",
      feedback:
        "Overview AI Solutions helped us build an AI chatbot that completely transformed our customer support system. Highly recommended!",
    },
    {
      name: "Subash Panti",
      role: "Product Manager",
      feedback:
        "Their team delivered a scalable analytics dashboard faster than expected. The quality and attention to detail were excellent.",
    },
    {
      name: "Aarav Sharma",
      role: "Tech Entrepreneur",
      feedback:
        "We saw immediate improvements in automation after working with them. Their AI solutions are practical and effective.",
    },
    {
      name: "Emily Watson",
      role: "Business Owner",
      feedback:
        "Professional, fast, and innovative. They built our cloud CRM system and it works flawlessly.",
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