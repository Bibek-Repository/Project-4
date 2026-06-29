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
    company: "",
    phone: "",
    service: "",
    message: "",
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
        "http://localhost:5000/api/contacts",
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
        company: "",
        phone: "",
        service: "",
        message: "",
      });

    } catch (err) {

      setError(
        err.message || "Something went wrong."
      );

    }

  };

  return (

    <section className="contact-page">

      {/* ================= HERO ================= */}

      <div className="contact-hero">

        <span className="section-tag">
          CONTACT US
        </span>

        <h1>
          Let's Build Something
          <span> Intelligent.</span>
        </h1>

        <p>
          Whether you're exploring AI for the first time or scaling
          enterprise solutions, our team is ready to help transform
          your ideas into impactful intelligent systems.
        </p>

      </div>

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
                New Baneshwor,
                <br />
                Kathmandu, Nepal
              </h4>

            </div>

          </div>

          <div className="info-card">

            <div className="info-icon">
              <FaEnvelope />
            </div>

            <div>

              <span>Email</span>

              <h4>
                contact@aisolutions-demo.com
              </h4>

            </div>

          </div>

          <div className="info-card">

            <div className="info-icon">
              <FaPhoneAlt />
            </div>

            <div>

              <span>Phone</span>

              <h4>
                +977-9800000000
              </h4>

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
              New Baneshwor
              <br />
              Kathmandu, Nepal
            </p>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
            >
              View on Google Maps →
            </a>

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="contact-form-card">

          <h2>Send Us a Message</h2>

          {success && (
            <div className="success-message">
              {success}
            </div>
          )}

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

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
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Company Name
                </label>

                <input
                  type="text"
                  name="company"
                  placeholder="AI Solutions Pvt. Ltd."
                  value={formData.company}
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label>
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  placeholder="+977 98XXXXXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div className="form-group">

              <label>
                Service Interested In
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >

                <option value="">
                  Select a service...
                </option>

                <option value="AI Chatbot Development">
                  AI Chatbot Development
                </option>

                <option value="Machine Learning Solutions">
                  Machine Learning Solutions
                </option>

                <option value="Computer Vision">
                  Computer Vision
                </option>

                <option value="Predictive Analytics">
                  Predictive Analytics
                </option>

                <option value="Natural Language Processing">
                  Natural Language Processing
                </option>

                <option value="Business Automation">
                  Business Automation
                </option>

                <option value="Cloud AI Solutions">
                  Cloud AI Solutions
                </option>

                <option value="AI Consultation">
                  AI Consultation
                </option>

              </select>

            </div>

            <div className="form-group">

              <label>
                Message <span>*</span>
              </label>

              <textarea
                rows="7"
                name="message"
                placeholder="Tell us about your project, goals, challenges, or any questions you have..."
                value={formData.message}
                onChange={handleChange}
                required
              />

            </div>

            <button
              className="submit-btn"
              type="submit"
            >

              <FiSend />

              <span>
                Send Message
              </span>

            </button>

          </form>

        </div>

      </div>

            {/* ================= MAP ================= */}

      <section className="map-section">

        <div className="map-header">

          <span className="section-tag">
            OUR LOCATION
          </span>

          <h2>Visit Our Office</h2>

          <p>
            We'd love to meet you in person. Stop by our office or
            schedule a consultation with our AI experts.
          </p>

        </div>

        <div className="map-container">

          <iframe
            title="AI Solutions Location"
            src="https://www.google.com/maps?q=New+Baneshwor+Kathmandu&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="faq-section">

        <div className="faq-header">

          <span className="section-tag">
            FAQ
          </span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Everything you need to know before starting your AI journey
            with us.
          </p>

        </div>

        <div className="faq-container">

          <div className="faq-item">

            <h3>
              How quickly do you respond to enquiries?
            </h3>

            <p>
              We typically reply within one business day. For urgent
              enquiries, feel free to contact us directly by phone.
            </p>

          </div>

          <div className="faq-item">

            <h3>
              Do you build custom AI solutions?
            </h3>

            <p>
              Yes. Every project is tailored to your business
              requirements, whether it's a chatbot, automation system,
              predictive analytics, or computer vision application.
            </p>

          </div>

          <div className="faq-item">

            <h3>
              Can I book a free consultation?
            </h3>

            <p>
              Absolutely. We offer an initial consultation to understand
              your goals and recommend the best AI strategy for your
              business.
            </p>

          </div>

          <div className="faq-item">

            <h3>
              What industries do you work with?
            </h3>

            <p>
              We work with healthcare, finance, retail, education,
              logistics, manufacturing, startups, and many other
              industries looking to adopt AI.
            </p>

          </div>

        </div>

      </section>

    </section>

  );

}

export default ContactForm;