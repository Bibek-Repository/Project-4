import "./ContactMap.css";

function ContactMap() {
  return (
    <section className="contact-map">
      <div className="map-header">
        <h2>Find Us</h2>
        <p>Visit our office or schedule a meeting with our team.</p>
      </div>

      <div className="map-container">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps?q=Sunderland+UK&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactMap;