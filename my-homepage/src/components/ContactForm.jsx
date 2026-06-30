import { useState } from "react";
import "./ContactForm.css";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

function ContactForm() {

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  jobTitle: "",
  jobDetails: "",
});

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setSuccess("");
    setError("");

    try {

      const response = await fetch(
        "${import.meta.env.VITE_API_URL}/api/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setSuccess(
        "Thank you! Your message has been sent successfully."
      );

     setFormData({
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  jobTitle: "",
  jobDetails: "",
});

    } catch (err) {

      setError(
        err.message || "Something went wrong."
      );

    }

  };

  return (
    <section className="contact-page">
      {/* ================= MAIN GRID ================= */}

      <div className="contact-wrapper">
        {/* ================= LEFT ================= */}

        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="info-card">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <span>Office Address</span>

              <h4>
                Sunderland,
                <br />
                United Kingdom
              </h4>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaEnvelope />
            </div>

            <div>
              <span>Email</span>

              <h4>info@aisolutions.com</h4>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <span>Phone</span>

              <h4>+44 123 456 789</h4>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaClock />
            </div>

            <div>
              <span>Office Hours</span>

              <h4>
                Sun – Fri
                <br />
                9:00 AM – 6:00 PM
              </h4>
            </div>
          </div>

          <div className="social-section">
            <h3>Follow Us</h3>

            <div className="social-icons">
              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaGithub />
              </a>

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Office Card */}

          <div className="office-card">
            <FaMapMarkerAlt className="office-location" />

            <h3>Visit Our Office</h3>

            <p>
              Sunderland
              <br />
              United Kingdom
            </p>

            <a href="https://maps.google.com" target="_blank" rel="noreferrer">
              View on Google Maps →
            </a>
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="contact-form-card">
          <h2>Send Us a Message</h2>

          {success && <div className="success-message">{success}</div>}

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
  <div className="form-grid">
    <div className="form-group">
      <label>
        Full Name <span>*</span>
      </label>

      <input
        type="text"
        name="name"
        placeholder="John Doe"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>
        Email Address <span>*</span>
      </label>

      <input
        type="email"
        name="email"
        placeholder="john@example.com"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>
        Phone Number <span>*</span>
      </label>

      <input
        type="text"
        name="phone"
        placeholder="+44 123 456 789"
        value={formData.phone}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>
        Company Name <span>*</span>
      </label>

      <input
        type="text"
        name="company"
        placeholder="ABC Technologies"
        value={formData.company}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>
        Country <span>*</span>
      </label>

      <input
        type="text"
        name="country"
        placeholder="United Kingdom"
        value={formData.country}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>
        Job Title <span>*</span>
      </label>

      <input
        type="text"
        name="jobTitle"
        placeholder="AI Chatbot Development"
        value={formData.jobTitle}
        onChange={handleChange}
        required
      />
    </div>
  </div>

  <div className="form-group">
    <label>
      Job Details <span>*</span>
    </label>

    <textarea
      rows="7"
      name="jobDetails"
      placeholder="Describe your project requirements, objectives, expected timeline, technologies, budget, or any other relevant information..."
      value={formData.jobDetails}
      onChange={handleChange}
      required
    />
  </div>

  <button className="submit-btn" type="submit">
    <FiSend />
    <span>Send Message</span>
  </button>
          </form>
        </div>
      </div>

      {/* ================= MAP ================= */}

      <section className="map-section">
        <div className="map-header">
          <span className="section-tag">OUR LOCATION</span>

          <h2>Visit Our Office</h2>

          <p>
            We'd love to meet you in person. Stop by our office or schedule a
            consultation with our AI experts.
          </p>
        </div>

        <div className="map-container">
          <iframe
            title="AI Solutions Location"
            src="https://www.google.com/maps?q=Sunderland,UK&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* ================= FAQ ================= */}

      <section className="faq-section">
        <div className="faq-header">
          <span className="section-tag">FAQ</span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Everything you need to know before starting your AI journey with us.
          </p>
        </div>

        <div className="faq-container">
          <div className="faq-item">
            <h3>How quickly do you respond to enquiries?</h3>

            <p>
              We typically reply within one business day. For urgent enquiries,
              feel free to contact us directly by phone.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do you build custom AI solutions?</h3>

            <p>
              Yes. Every project is tailored to your business requirements,
              whether it's a chatbot, automation system, predictive analytics,
              or computer vision application.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I book a free consultation?</h3>

            <p>
              Absolutely. We offer an initial consultation to understand your
              goals and recommend the best AI strategy for your business.
            </p>
          </div>

          <div className="faq-item">
            <h3>What industries do you work with?</h3>

            <p>
              We work with healthcare, finance, retail, education, logistics,
              manufacturing, startups, and many other industries looking to
              adopt AI.
            </p>
          </div>
        </div>
      </section>
    </section>
  );

}

export default ContactForm;