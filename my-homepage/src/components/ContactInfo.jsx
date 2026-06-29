import "./ContactInfo.css";

function ContactInfo() {
  const info = [
    {
      icon: "📧",
      title: "Email Us",
      text: "info@aisolutions.com",
      link: "mailto:info@aisolutions.com",
    },
    {
      icon: "📱",
      title: "Call Us",
      text: "+44 123 456 789",
      link: "tel:+44123456789",
    },
    {
      icon: "📍",
      title: "Visit Us",
      text: "Sunderland, United Kingdom",
      link: "https://www.google.com/maps/search/?api=1&query=Sunderland,United+Kingdom",
    },
  ];

  return (
    <section className="contact-info">
      <div className="contact-info-grid">
        {info.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="info-card"
            target={item.title === "Visit Us" ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            <div className="info-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ContactInfo;