import "./ContactInfo.css";

function ContactInfo() {
  const info = [
    {
      icon: "📧",
      title: "Email Us",
      text: "hello@overviewai.com"
    },
    {
      icon: "📱",
      title: "Call Us",
      text: "+44 123 456 789"
    },
    {
      icon: "📍",
      title: "Visit Us",
      text: "Sunderland, United Kingdom"
    }
  ];

  return (
    <section className="contact-info">
      <div className="contact-info-grid">
        {info.map((item, index) => (
          <div className="info-card" key={index}>
            <div className="info-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactInfo;